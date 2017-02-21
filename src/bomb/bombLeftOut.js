// @flow
import { compose, rotate,blur } from '../utils/utils';
import type { Animation } from '../utils/types';

const bombLeftOut: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: rotate(0),
    filter:blur('0px')
  },
  '50%': {
    opacity: 1,
    transformOrigin: '-100% 50%',
    transform: rotate(-160),
    filter:blur('0px')
  },
  '100%': {
    opacity: 0,
    transformOrigin: '-100% 50%',
    transform: rotate(-160),
    filter:blur('20px')
  }
};

export default bombLeftOut;
