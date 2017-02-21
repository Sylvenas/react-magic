'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var slideLeft = {
  '0%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateX)('0%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateX)('-100%')
  }
};
exports.default = slideLeft;