'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleTranslateX = (0, _utils.compose)(_utils.scale, _utils.translateX);


var tinRightOut = {
  '0%, 20%, 40%, 50%': {
    opacity: 1,
    transform: scaleTranslateX([1], [0])
  },
  '10%, 30%': {
    opacity: 1,
    transform: scaleTranslateX([1.1], [0])
  },
  '100%': {
    opacity: 0,
    transform: scaleTranslateX([1], ['300%'])
  }
};

exports.default = tinRightOut;