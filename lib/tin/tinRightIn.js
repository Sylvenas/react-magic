'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleTranslateX = (0, _utils.compose)(_utils.scale, _utils.translateX);


var tinRightIn = {
  '0%': {
    opacity: 0,
    transform: scaleTranslateX([1], ['300%'])
  },
  '50%, 70%, 90%': {
    opacity: 1,
    transform: scaleTranslateX([1.1], [0])
  },
  '60%, 80%, 100%': {
    opacity: 1,
    transform: scaleTranslateX([1], [0])
  }
};

exports.default = tinRightIn;