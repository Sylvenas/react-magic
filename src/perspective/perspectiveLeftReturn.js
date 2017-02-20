// @flow
import { compose, perspective, rotateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateY = compose(perspective, rotateY)

const perspectiveLeftReturn: Animation = {
  '0%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateY(['800px'],[-180])
  },
  '100%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateY(['800px'],[0])
  }
};

export default perspectiveLeftReturn;
