// @flow
import { scale } from '../utils/utils';
import type { Animation } from '../utils/types';

const swashOut: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scale(1)
  },
  '80%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scale(0.9)
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scale(0)
  }
};

export default swashOut;
