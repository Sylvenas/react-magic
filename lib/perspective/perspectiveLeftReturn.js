'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateY = (0, _utils.compose)(_utils.perspective, _utils.rotateY);


var perspectiveLeftReturn = {
  '0%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateY(['800px'], [-180])
  },
  '100%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateY(['800px'], [0])
  }
};

exports.default = perspectiveLeftReturn;