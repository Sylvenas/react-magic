// @flow
import { compose, scale, rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleRotate = compose(scale, rotate);

const foolishOut: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scaleRotate([1],[360])
  },
  '20%': {
    opacity: 1,
    transformOrigin: '0% 0%',
    transform: scaleRotate([0.5],[0])
  },
   '40%': {
    opacity: 1,
    transformOrigin: '100% 0%',
    transform: scaleRotate([0.5],[0])
  },
   '60%': {
    opacity: 1,
    transformOrigin: '0% 0%',
    transform: scaleRotate([0.5],[0])
  },
   '80%': {
    opacity: 1,
    transformOrigin: '0% 100%',
    transform: scaleRotate([0.5],[0])
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scaleRotate([0],[0])
  }
};

export default foolishOut;
