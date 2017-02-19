// @flow
import { compose, scale, rotate, translateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleRotateTranslateY = compose(scale, rotate, translateY)

const twisterInUp: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '100% 0',
    transform: scaleRotateTranslateY([0], [360], ['100%'])
  },
  '30%': {
    transformOrigin: '100% 0',
    transform: scaleRotateTranslateY([0], [360], ['100%'])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '0 0',
    transform: scaleRotateTranslateY([1], [0], ['0'])
  }
};

export default twisterInUp;
