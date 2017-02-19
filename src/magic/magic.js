// @flow
import { compose, scale, rotate } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaleAndRotate = compose(scale, rotate)

const magic: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '200% 500%',
    transform: scaleAndRotate([0], [270])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '100% 200%',
    transform: scaleAndRotate([1], [0])
  }
};

export default magic;
