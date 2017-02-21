'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateXRotateY = (0, _utils.compose)(_utils.perspective, _utils.rotateX, _utils.rotateY);


var boingOutDown = {
  '0%': {
    opacity: 1,
    transformOrigin: '100% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [0], [0])
  },
  '20%': {
    opacity: 1,
    transformOrigin: '100% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [0], [10])
  },
  '30%': {
    opacity: 1,
    transformOrigin: '0% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [0], [0])
  },
  '40%': {
    opacity: 1,
    transformOrigin: '0% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [10], [10])
  },
  '100%': {
    opacity: 0,
    transformOrigin: '100% 100%',
    transform: perspectiveRotateXRotateY(['800px'], [90], [0])
  }
};

exports.default = boingOutDown;