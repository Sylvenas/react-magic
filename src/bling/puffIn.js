// @flow
import { compose, scale,blur } from '../utils/utils';
import type { Animation } from '../utils/types';

const puffIn: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scale(2,2),
    filter:blur('2px')
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scale(1,1),
    filter:blur('0px')
  }
};

export default puffIn;
