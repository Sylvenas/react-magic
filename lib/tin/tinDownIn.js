'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleTranslateY = (0, _utils.compose)(_utils.scale, _utils.translateY);


var tinDownIn = {
  '0%': {
    opacity: 0,
    transform: scaleTranslateY([1], ['300%'])
  },
  '50%, 70%, 90%': {
    opacity: 1,
    transform: scaleTranslateY([1.1], [0])
  },
  '60%, 80%, 100%': {
    opacity: 1,
    transform: scaleTranslateY([1], [0])
  }
};

exports.default = tinDownIn;