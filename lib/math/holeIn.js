'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleRotateY = (0, _utils.compose)(_utils.scale, _utils.rotateY);


var holeIn = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scaleRotateY([0], [180])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scaleRotateY([1], [0])
  }
};

exports.default = holeIn;