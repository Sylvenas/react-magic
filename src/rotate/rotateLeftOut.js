// @flow
import { compose, perspective, rotateY, translateZ } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateYTranslateZ = compose(perspective, rotateY, translateZ)

const rotateLeftOut: Animation = {
  '0%': {
    opacity: 1,
    transformOrigin: '0 0',
    transform: perspectiveRotateYTranslateZ(['800px'], [0], ['0px'])
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 0',
    transform: perspectiveRotateYTranslateZ(['800px'], [-180], ['300px'])
  }
};

export default rotateLeftOut;
