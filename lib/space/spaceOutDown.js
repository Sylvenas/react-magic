'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaletranslateXY = (0, _utils.compose)(_utils.scale, _utils.translateXY);


var spaceOutDown = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 100%',
    transform: scaletranslateXY([1], ['0%', '0%'])
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 100%',
    transform: scaletranslateXY([0.2], ['0%', '200%'])
  }
};

exports.default = spaceOutDown;