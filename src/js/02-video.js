import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player', {
  id: 236203659,
  width: 640,
  height: 360,
});

player.on('timeupdate', throttle(({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
};
