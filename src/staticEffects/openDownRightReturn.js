// @flow
import { rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const openDownRightReturn: Animation = {
  '0%': {
    transformOrigin: 'bottom right',
    transform: rotate(110),
    animationTimingFunction: 'ease-in-out'
  },
  '100%': {
    transformOrigin: 'bottom right',
    transform: rotate(0),
    animationTimingFunction: 'ease-out'
  }
};

export default openDownRightReturn;
