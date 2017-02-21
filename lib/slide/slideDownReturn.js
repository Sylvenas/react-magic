'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var slideDownReturn = {
  '0%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateY)('100%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateY)('0%')
  }
};
exports.default = slideDownReturn;