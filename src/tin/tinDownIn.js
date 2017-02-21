// @flow
import { compose, scale, translateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleTranslateY = compose(scale, translateY)

const tinDownIn: Animation = {
  '0%': {
    opacity: 0,
    transform: scaleTranslateY([1], ['300%'])
  },
  '50%, 70%, 90%': {
    opacity: 1,
    transform: scaleTranslateY([1.1], [0])
  },
  '60%, 80%, 100%': {
    opacity: 1,
    transform: scaleTranslateY([1], [0])
  }
};

export default tinDownIn;
