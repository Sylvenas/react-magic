// @flow
import { compose, scale, translateXY } from '../utils/utils';
import type { Animation } from '../utils/types';

const scaletranslateXY = compose(scale, translateXY)

const swap: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '0 100%',
    transform: scaletranslateXY([0], ['-700px', '0px'])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '100% 100%',
    transform: scaletranslateXY([1], ['0px', '0px'])
  }
};

export default swap;
