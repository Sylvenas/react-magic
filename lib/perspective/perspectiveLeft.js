'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateY = (0, _utils.compose)(_utils.perspective, _utils.rotateY);


var perspectiveLeft = {
  '0%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateY(['800px'], [0])
  },
  '100%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateY(['800px'], [-180])
  }
};

exports.default = perspectiveLeft;