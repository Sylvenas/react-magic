'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleAndRotate = (0, _utils.compose)(_utils.scale, _utils.rotate);


var magic = {
  '0%': {
    opacity: 0,
    transformOrigin: '200% 500%',
    transform: scaleAndRotate([0], [270])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '100% 200%',
    transform: scaleAndRotate([1], [0])
  }
};

exports.default = magic;