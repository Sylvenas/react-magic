'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var scaleRotate = (0, _utils.compose)(_utils.scale, _utils.rotate);


var foolishOut = {
  '0%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: scaleRotate([1], [360])
  },
  '20%': {
    opacity: 1,
    transformOrigin: '0% 0%',
    transform: scaleRotate([0.5], [0])
  },
  '40%': {
    opacity: 1,
    transformOrigin: '100% 0%',
    transform: scaleRotate([0.5], [0])
  },
  '60%': {
    opacity: 1,
    transformOrigin: '0% 0%',
    transform: scaleRotate([0.5], [0])
  },
  '80%': {
    opacity: 1,
    transformOrigin: '0% 100%',
    transform: scaleRotate([0.5], [0])
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: scaleRotate([0], [0])
  }
};

exports.default = foolishOut;