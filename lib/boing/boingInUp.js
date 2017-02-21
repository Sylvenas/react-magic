'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateX = (0, _utils.compose)(_utils.perspective, _utils.rotateX);


var boingInUp = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 0%',
    transform: perspectiveRotateX(['800px'], [-90])
  },
  '50%': {
    opacity: 1,
    transformOrigin: '50% 0%',
    transform: perspectiveRotateX(['800px'], [50])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 0%',
    transform: perspectiveRotateX(['800px'], [0])
  }
};

exports.default = boingInUp;