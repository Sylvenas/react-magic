// @flow
import { rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const openDownLeft: Animation = {
  '0%': {
    transformOrigin: 'bottom left',
    transform: rotate(0),
    animationTimingFunction: 'ease-out'
  },
  '100%': {
    transformOrigin: 'bottom left',
    transform: rotate(-110),
    animationTimingFunction: 'ease-in-out'
  }
};

export default openDownLeft;
