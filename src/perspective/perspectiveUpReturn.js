// @flow
import { compose, perspective, rotateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateX = compose(perspective, rotateX)

const perspectiveUpReturn: Animation = {
  '0%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateX(['800px'],[180])
  },
  '100%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateX(['800px'],[0])
  }
};

export default perspectiveUpReturn;
