'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var slideUp = {
  '0%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateY)('0%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateY)('-100%')
  }
};
exports.default = slideUp;