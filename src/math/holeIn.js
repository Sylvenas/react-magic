// @flow
import { compose, scale, rotateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleRotateY=compose(scale,rotateY);

const holeIn: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scaleRotateY([0],[180])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scaleRotateY([1],[0])
  }
};

export default holeIn;
