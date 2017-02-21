'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleTranslateY = (0, _utils.compose)(_utils.scale, _utils.translateY);


var tinDownOut = {
  '0%, 20%, 40%, 50%': {
    opacity: 1,
    transform: scaleTranslateY([1], [0])
  },
  '10%, 30%': {
    opacity: 1,
    transform: scaleTranslateY([1.1], [0])
  },
  '100%': {
    opacity: 0,
    transform: scaleTranslateY([1], ['300%'])
  }
};

exports.default = tinDownOut;