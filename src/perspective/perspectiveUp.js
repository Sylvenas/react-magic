// @flow
import { compose, perspective, rotateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateX = compose(perspective, rotateX)

const perspectiveUp: Animation = {
  '0%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateX(['800px'],[0])
  },
  '100%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateX(['800px'],[180])
  }
};

export default perspectiveUp;
