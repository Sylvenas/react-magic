'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaletranslateXY = (0, _utils.compose)(_utils.scale, _utils.translateXY);


var spaceInRight = {
  '0%': {
    opacity: 0,
    transformOrigin: '100% 50%',
    transform: scaletranslateXY([0.2], ['200%', '0%'])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '100% 50%',
    transform: scaletranslateXY([1], ['0%', '0%'])
  }
};

exports.default = spaceInRight;