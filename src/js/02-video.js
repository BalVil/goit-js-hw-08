const Player = require('@vimeo/player');
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onTimeupdate = function (data) {
  let playbackTime = `${data.seconds}`;
  localStorage.setItem('videoplayer-current-time', playbackTime);
};
player.on('timeupdate', throttle(onTimeupdate, 1000));

let currentTime = localStorage.getItem('videoplayer-current-time');

resumePlayback(currentTime);

function resumePlayback(time) {
  if (time) {
    player
      .setCurrentTime(time)
      .then(function () {
        return player.play();
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration');
            break;

          default:
            console.log('some other error occurred');
            break;
        }
      });
  }
}
