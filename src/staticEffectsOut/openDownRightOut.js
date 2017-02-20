// @flow
import { rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const openDownRightOut: Animation = {
  '0%': {
    opacity:1,
    transformOrigin: 'bottom right',
    transform: rotate(0),
    animationTimingFunction: 'ease-out'
  },
  '100%': {
    opacity:0,
    transformOrigin: 'bottom right',
    transform: rotate(110),
    animationTimingFunction: 'ease-in-out'
  }
};

export default openDownRightOut;
