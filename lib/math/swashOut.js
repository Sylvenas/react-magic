'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var swashOut = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(1)
  },
  '80%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(0.9)
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(0)
  }
};
exports.default = swashOut;