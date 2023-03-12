const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

var throttle = require('lodash.throttle');

player.on(
  'timeupdate',
  throttle(function (data) {
    let videoplayerCurrentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', videoplayerCurrentTime);
    console.log(videoplayerCurrentTime);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
