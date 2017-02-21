'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateY = (0, _utils.compose)(_utils.perspective, _utils.rotateY);


var perspectiveRightReturn = {
  '0%': {
    transformOrigin: '100% 0',
    transform: perspectiveRotateY(['800px'], [180])
  },
  '100%': {
    transformOrigin: '100% 0',
    transform: perspectiveRotateY(['800px'], [0])
  }
};

exports.default = perspectiveRightReturn;