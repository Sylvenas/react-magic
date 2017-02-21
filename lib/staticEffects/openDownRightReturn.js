'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var openDownRightReturn = {
  '0%': {
    transformOrigin: 'bottom right',
    transform: (0, _utils.rotate)(110),
    animationTimingFunction: 'ease-in-out'
  },
  '100%': {
    transformOrigin: 'bottom right',
    transform: (0, _utils.rotate)(0),
    animationTimingFunction: 'ease-out'
  }
};
exports.default = openDownRightReturn;