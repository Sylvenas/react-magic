'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var openUpLeftReturn = {
  '0%': {
    transformOrigin: 'top left',
    transform: (0, _utils.rotate)(110),
    animationTimingFunction: 'ease-in-out'
  },
  '100%': {
    transformOrigin: 'top left',
    transform: (0, _utils.rotate)(0),
    animationTimingFunction: 'ease-out'
  }
};
exports.default = openUpLeftReturn;