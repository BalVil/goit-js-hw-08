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
    player.setCurrentTime(time).then(function () {
      return player.play();
    });
  }
}
