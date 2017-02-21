// @flow
import { compose, scale, translateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleTranslateX = compose(scale, translateX)

const tinRightIn: Animation = {
  '0%': {
    opacity: 0,
    transform: scaleTranslateX([1], ['300%'])
  },
  '50%, 70%, 90%': {
    opacity: 1,
    transform: scaleTranslateX([1.1], [0])
  },
  '60%, 80%, 100%': {
    opacity: 1,
    transform: scaleTranslateX([1], [0])
  }
};

export default tinRightIn;
