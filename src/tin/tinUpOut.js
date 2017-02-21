// @flow
import { compose, scale, translateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleTranslateY = compose(scale, translateY)

const tinUpOut: Animation = {
  '0%, 20%, 40%, 50%': {
    opacity: 1,
    transform: scaleTranslateY([1], [0])
  },
  '10%, 30%': {
    opacity: 1,
    transform: scaleTranslateY([1.1], [0])
  },
  '100%': {
    opacity: 0,
    transform: scaleTranslateY([1], ['-300%'])
  }
};

export default tinUpOut;
