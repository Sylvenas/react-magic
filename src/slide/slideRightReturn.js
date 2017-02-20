// @flow
import { translateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const slideRightReturn: Animation = {
  '0%': {
    transformOrigin: '0 0',
    transform: translateX('100%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: translateX('0%')
  }
};

export default slideRightReturn;
