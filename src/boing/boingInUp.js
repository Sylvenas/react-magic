// @flow
import { compose,perspective ,rotateX } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateX=compose(perspective,rotateX)

const boingInUp: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 0%',
    transform: perspectiveRotateX(['800px'],[-90]),
  },
  '50%': {
    opacity: 1,
    transformOrigin: '50% 0%',
    transform: perspectiveRotateX(['800px'],[50]),
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 0%',
    transform: perspectiveRotateX(['800px'],[0]),
  }
};

export default boingInUp;
