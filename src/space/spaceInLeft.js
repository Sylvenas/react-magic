// @flow
import { compose, scale, translateXY } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaletranslateXY = compose(scale, translateXY)

const spaceInLeft: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '0% 50%',
    transform: scaletranslateXY([0.2], ['-200%', '0%'])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '0% 50%',
    transform: scaletranslateXY([1], ['0%', '0%'])
  }
};

export default spaceInLeft;
