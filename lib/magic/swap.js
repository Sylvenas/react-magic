'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaletranslateXY = (0, _utils.compose)(_utils.scale, _utils.translateXY);


var swap = {
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

exports.default = swap;