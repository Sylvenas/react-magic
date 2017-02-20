// @flow
import { translateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const slideUpReturn: Animation = {
  '0%': {
    transformOrigin: '0 0',
    transform: translateY('-100%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: translateY('0%')
  }
};

export default slideUpReturn;
