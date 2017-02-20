// @flow
import { scale } from '../utils/utils';
import type { Animation } from '../utils/types';

const swashIn: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scale(0)
  },
  '80%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scale(0.9)
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scale(1)
  }
};

export default swashIn;
