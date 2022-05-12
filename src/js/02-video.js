const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onTimeupdate = function (data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', 'data');
};

player.on('timeupdate', onTimeupdate);
