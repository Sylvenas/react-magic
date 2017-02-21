'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateYTranslateZ = (0, _utils.compose)(_utils.perspective, _utils.rotateY, _utils.translateZ);


var rotateRightOut = {
  '0%': {
    opacity: 1,
    transformOrigin: '0 0',
    transform: perspectiveRotateYTranslateZ(['800px'], [0], ['0px'])
  },
  '100%': {
    opacity: 0,
    transformOrigin: '50% 0',
    transform: perspectiveRotateYTranslateZ(['800px'], [180], ['300px'])
  }
};

exports.default = rotateRightOut;