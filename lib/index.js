'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vanishOut = exports.vanishIn = exports.puffOut = exports.puffIn = exports.twisterInUp = exports.twisterInDown = exports.swap = exports.magic = undefined;

var _magic2 = require('./magic/magic');

var _magic3 = _interopRequireDefault(_magic2);

var _swap2 = require('./magic/swap');

var _swap3 = _interopRequireDefault(_swap2);

var _twisterInDown2 = require('./magic/twisterInDown');

var _twisterInDown3 = _interopRequireDefault(_twisterInDown2);

var _twisterInUp2 = require('./magic/twisterInUp');

var _twisterInUp3 = _interopRequireDefault(_twisterInUp2);

var _puffIn2 = require('./bling/puffIn');

var _puffIn3 = _interopRequireDefault(_puffIn2);

var _puffOut2 = require('./bling/puffOut');

var _puffOut3 = _interopRequireDefault(_puffOut2);

var _vanishIn2 = require('./bling/vanishIn');

var _vanishIn3 = _interopRequireDefault(_vanishIn2);

var _vanishOut2 = require('./bling/vanishOut');

var _vanishOut3 = _interopRequireDefault(_vanishOut2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.magic = _magic3.default; //magic

exports.swap = _swap3.default;
exports.twisterInDown = _twisterInDown3.default;
exports.twisterInUp = _twisterInUp3.default;

//bling

exports.puffIn = _puffIn3.default;
exports.puffOut = _puffOut3.default;
exports.vanishIn = _vanishIn3.default;
exports.vanishOut = _vanishOut3.default;