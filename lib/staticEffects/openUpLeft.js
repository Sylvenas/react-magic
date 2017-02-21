'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var openUpLeft = {
  '0%': {
    transformOrigin: 'top left',
    transform: (0, _utils.rotate)(0),
    animationTimingFunction: 'ease-out'
  },
  '100%': {
    transformOrigin: 'top left',
    transform: (0, _utils.rotate)(110),
    animationTimingFunction: 'ease-in-out'
  }
};
exports.default = openUpLeft;