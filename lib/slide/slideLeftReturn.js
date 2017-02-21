'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var slideLeftReturn = {
  '0%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateX)('-100%')
  },
  '100%': {
    transformOrigin: '0 0',
    transform: (0, _utils.translateX)('0%')
  }
};
exports.default = slideLeftReturn;