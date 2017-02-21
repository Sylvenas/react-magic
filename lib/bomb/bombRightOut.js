'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var bombRightOut = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: (0, _utils.rotate)(0),
    filter: (0, _utils.blur)('0px')
  },
  '50%': {
    opacity: 1,
    transformOrigin: '200% 50%',
    transform: (0, _utils.rotate)(160),
    filter: (0, _utils.blur)('0px')
  },
  '100%': {
    opacity: 0,
    transformOrigin: '200% 50%',
    transform: (0, _utils.rotate)(160),
    filter: (0, _utils.blur)('20px')
  }
};
exports.default = bombRightOut;