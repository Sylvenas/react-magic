// @flow
import { compose, scale,blur } from '../utils/utils';
import type { Animation } from '../utils/types';

const vanishOut: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scale(1,1),
    filter:blur('0px')
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scale(2,2),
    filter:blur('20px')
  }
};

export default vanishOut;
