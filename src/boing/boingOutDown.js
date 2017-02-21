// @flow
import { compose, perspective, rotateX, rotateY } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateXRotateY = compose(perspective, rotateX, rotateY)

const boingOutDown: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '100% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [0], [0]),
  },
  '20%': {
    opacity: 1,
    transformOrigin: '100% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [0], [10]),
  },
  '30%': {
    opacity: 1,
    transformOrigin: '0% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [0], [0]),
  },
  '40%': {
    opacity: 1,
    transformOrigin: '0% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [10], [10]),
  },
  '100%': {
    opacity: 0,
    transformOrigin: '100% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [90], [0]),
  }
};

export default boingOutDown;
