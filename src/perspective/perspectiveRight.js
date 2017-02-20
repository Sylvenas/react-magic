// @flow
import { compose, perspective, rotateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateY = compose(perspective, rotateY)

const perspectiveRight: Animation = {
  '0%': {
    transformOrigin: '100% 0',
    transform: perspectiveRotateY(['800px'],[0])
  },
  '100%': {
    transformOrigin: '100% 0',
    transform: perspectiveRotateY(['800px'],[180])
  }
};

export default perspectiveRight;
