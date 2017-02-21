'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var openDownLeftReturn = {
  '0%': {
    transformOrigin: 'bottom left',
    transform: (0, _utils.rotate)(-110),
    animationTimingFunction: 'ease-in-out'
  },
  '100%': {
    transformOrigin: 'bottom left',
    transform: (0, _utils.rotate)(0),
    animationTimingFunction: 'ease-out'
  }
};
exports.default = openDownLeftReturn;