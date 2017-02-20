// @flow
import { compose, perspective, rotateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateX = compose(perspective, rotateX)

const perspectiveDownReturn: Animation = {
  '0%': {
    transformOrigin: '0 100%',
    transform: perspectiveRotateX(['800px'],[-180])
  },
  '100%': {
    transformOrigin: '0 100%',
    transform: perspectiveRotateX(['800px'],[0])
  }
};

export default perspectiveDownReturn;
