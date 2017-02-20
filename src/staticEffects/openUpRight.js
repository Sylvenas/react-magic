// @flow
import { rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const openUpRight: Animation = {
  '0%': {
    transformOrigin: 'top right',
    transform: rotate(0),
    animationTimingFunction: 'ease-out'
  },
  '100%': {
    transformOrigin: 'top right',
    transform: rotate(-110),
    animationTimingFunction: 'ease-in-out'
  }
};

export default openUpRight;
