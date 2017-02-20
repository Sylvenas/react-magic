// @flow
import { translateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const slideLeft: Animation = {
  '0%': {
    transformOrigin: '0 0',
    transform: translateX('0%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: translateX('-100%')
  }
};

export default slideLeft;
