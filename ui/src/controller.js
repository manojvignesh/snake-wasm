import {Movement} from 'wasm-snake-game';

const MOVEMENT_KEYS = {
  [Movement.TOP]: [87, 38],
  [Movement.RIGHT]: [68, 39],
  [Movement.DOWN]: [83, 40],
  [Movement.LEFT]: [65, 37],
};

const STOP_KEY = 32;

const noop = () => {
};

export class Controller {
  constructor(onStop = noop) {
    window.addEventListener('keydown', ({which}) => {
      this.movement = Object.keys(MOVEMENT_KEYS).find(key => MOVEMENT_KEYS[key].includes(which));
    });
    window.addEventListener('keyup', ({which}) => {
      this.movement = undefined;
      if (which === STOP_KEY) {
        onStop();
      }
    });
  }
}