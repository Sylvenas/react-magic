'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleRotateTranslateY = (0, _utils.compose)(_utils.scale, _utils.rotate, _utils.translateY);


var twisterInUp = {
  '0%': {
    opacity: 0,
    transformOrigin: '0 100%',
    transform: scaleRotateTranslateY([0], [360], ['-100%'])
  },
  '30%': {
    transformOrigin: '0 100%',
    transform: scaleRotateTranslateY([0], [360], ['-100%'])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '100% 100%',
    transform: scaleRotateTranslateY([1], [0], ['0%'])
  }
};

exports.default = twisterInUp;