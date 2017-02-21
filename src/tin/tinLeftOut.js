// @flow
import { compose, scale, translateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleTranslateX = compose(scale, translateX)

const tinLeftOut: Animation = {
  '0%, 20%, 40%, 50%': {
    opacity: 1,
    transform: scaleTranslateX([1], [0])
  },
  '10%, 30%': {
    opacity: 1,
    transform: scaleTranslateX([1.1], [0])
  },
  '100%': {
    opacity: 0,
    transform: scaleTranslateX([1], ['-300%'])
  }
};

export default tinLeftOut;
