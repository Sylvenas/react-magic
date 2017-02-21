// @flow
import { compose, rotate,blur } from '../utils/utils';
import type { Animation } from '../utils/types';

const bombRightOut: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: rotate(0),
    filter:blur('0px')
  },
  '50%': {
    opacity: 1,
    transformOrigin: '200% 50%',
    transform: rotate(160),
    filter:blur('0px')
  },
  '100%': {
    opacity: 0,
    transformOrigin: '200% 50%',
    transform: rotate(160),
    filter:blur('20px')
  }
};

export default bombRightOut;
