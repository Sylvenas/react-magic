'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var swashIn = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(0)
  },
  '80%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(0.9)
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(1)
  }
};
exports.default = swashIn;