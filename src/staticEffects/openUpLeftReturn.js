// @flow
import { rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const openUpLeftReturn: Animation = {
  '0%': {
    transformOrigin: 'top left',
    transform: rotate(110),
    animationTimingFunction: 'ease-in-out'
  },
  '100%': {
    transformOrigin: 'top left',
    transform: rotate(0),
    animationTimingFunction: 'ease-out'
  }
};

export default openUpLeftReturn;
