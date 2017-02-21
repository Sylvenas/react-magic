'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spaceOutUp = exports.spaceOutRight = exports.spaceOutLeft = exports.spaceOutDown = exports.spaceInUp = exports.spaceInRight = exports.spaceInLeft = exports.spaceInDown = exports.boingOutDown = exports.boingInUp = exports.bombRightOut = exports.bombLeftOut = exports.tinUpOut = exports.tinUpIn = exports.tinRightOut = exports.tinRightIn = exports.tinLeftOut = exports.tinLeftIn = exports.tinDownOut = exports.tinDownIn = exports.swashOut = exports.swashIn = exports.holeOut = exports.holeIn = exports.foolishOut = exports.foolishIn = exports.slideUpReturn = exports.slideUp = exports.slideRightReturn = exports.slideRight = exports.slideLeftReturn = exports.slideLeft = exports.slideDownReturn = exports.slideDown = exports.rotateUpOut = exports.rotateUpIn = exports.rotateRightOut = exports.rotateRightIn = exports.rotateLeftOut = exports.rotateLeftIn = exports.rotateDownOut = exports.rotateDownIn = exports.perspectiveUpReturn = exports.perspectiveUp = exports.perspectiveRightReturn = exports.perspectiveRight = exports.perspectiveLeftReturn = exports.perspectiveLeft = exports.perspectiveDownReturn = exports.perspectiveDown = exports.openUpRightOut = exports.openUpLeftOut = exports.openDownRightOut = exports.openDownLeftOut = exports.openUpRightReturn = exports.openUpRight = exports.openUpLeftReturn = exports.openUpLeft = exports.openDownRightReturn = exports.openDownRight = exports.openDownLeftReturn = exports.openDownLeft = exports.vanishOut = exports.vanishIn = exports.puffOut = exports.puffIn = exports.twisterInUp = exports.twisterInDown = exports.swap = exports.magic = undefined;

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

var _openDownLeft2 = require('./staticEffects/openDownLeft');

var _openDownLeft3 = _interopRequireDefault(_openDownLeft2);

var _openDownLeftReturn2 = require('./staticEffects/openDownLeftReturn');

var _openDownLeftReturn3 = _interopRequireDefault(_openDownLeftReturn2);

var _openDownRight2 = require('./staticEffects/openDownRight');

var _openDownRight3 = _interopRequireDefault(_openDownRight2);

var _openDownRightReturn2 = require('./staticEffects/openDownRightReturn');

var _openDownRightReturn3 = _interopRequireDefault(_openDownRightReturn2);

var _openUpLeft2 = require('./staticEffects/openUpLeft');

var _openUpLeft3 = _interopRequireDefault(_openUpLeft2);

var _openUpLeftReturn2 = require('./staticEffects/openUpLeftReturn');

var _openUpLeftReturn3 = _interopRequireDefault(_openUpLeftReturn2);

var _openUpRight2 = require('./staticEffects/openUpRight');

var _openUpRight3 = _interopRequireDefault(_openUpRight2);

var _openUpRightReturn2 = require('./staticEffects/openUpRightReturn');

var _openUpRightReturn3 = _interopRequireDefault(_openUpRightReturn2);

var _openDownLeftOut2 = require('./staticEffectsOut/openDownLeftOut');

var _openDownLeftOut3 = _interopRequireDefault(_openDownLeftOut2);

var _openDownRightOut2 = require('./staticEffectsOut/openDownRightOut');

var _openDownRightOut3 = _interopRequireDefault(_openDownRightOut2);

var _openUpLeftOut2 = require('./staticEffectsOut/openUpLeftOut');

var _openUpLeftOut3 = _interopRequireDefault(_openUpLeftOut2);

var _openUpRightOut2 = require('./staticEffectsOut/openUpRightOut');

var _openUpRightOut3 = _interopRequireDefault(_openUpRightOut2);

var _perspectiveDown2 = require('./perspective/perspectiveDown');

var _perspectiveDown3 = _interopRequireDefault(_perspectiveDown2);

var _perspectiveDownReturn2 = require('./perspective/perspectiveDownReturn');

var _perspectiveDownReturn3 = _interopRequireDefault(_perspectiveDownReturn2);

var _perspectiveLeft2 = require('./perspective/perspectiveLeft');

var _perspectiveLeft3 = _interopRequireDefault(_perspectiveLeft2);

var _perspectiveLeftReturn2 = require('./perspective/perspectiveLeftReturn');

var _perspectiveLeftReturn3 = _interopRequireDefault(_perspectiveLeftReturn2);

var _perspectiveRight2 = require('./perspective/perspectiveRight');

var _perspectiveRight3 = _interopRequireDefault(_perspectiveRight2);

var _perspectiveRightReturn2 = require('./perspective/perspectiveRightReturn');

var _perspectiveRightReturn3 = _interopRequireDefault(_perspectiveRightReturn2);

var _perspectiveUp2 = require('./perspective/perspectiveUp');

var _perspectiveUp3 = _interopRequireDefault(_perspectiveUp2);

var _perspectiveUpReturn2 = require('./perspective/perspectiveUpReturn');

var _perspectiveUpReturn3 = _interopRequireDefault(_perspectiveUpReturn2);

var _rotateDownIn2 = require('./rotate/rotateDownIn');

var _rotateDownIn3 = _interopRequireDefault(_rotateDownIn2);

var _rotateDownOut2 = require('./rotate/rotateDownOut');

var _rotateDownOut3 = _interopRequireDefault(_rotateDownOut2);

var _rotateLeftIn2 = require('./rotate/rotateLeftIn');

var _rotateLeftIn3 = _interopRequireDefault(_rotateLeftIn2);

var _rotateLeftOut2 = require('./rotate/rotateLeftOut');

var _rotateLeftOut3 = _interopRequireDefault(_rotateLeftOut2);

var _rotateRightIn2 = require('./rotate/rotateRightIn');

var _rotateRightIn3 = _interopRequireDefault(_rotateRightIn2);

var _rotateRightOut2 = require('./rotate/rotateRightOut');

var _rotateRightOut3 = _interopRequireDefault(_rotateRightOut2);

var _rotateUpIn2 = require('./rotate/rotateUpIn');

var _rotateUpIn3 = _interopRequireDefault(_rotateUpIn2);

var _rotateUpOut2 = require('./rotate/rotateUpOut');

var _rotateUpOut3 = _interopRequireDefault(_rotateUpOut2);

var _slideDown2 = require('./slide/slideDown');

var _slideDown3 = _interopRequireDefault(_slideDown2);

var _slideDownReturn2 = require('./slide/slideDownReturn');

var _slideDownReturn3 = _interopRequireDefault(_slideDownReturn2);

var _slideLeft2 = require('./slide/slideLeft');

var _slideLeft3 = _interopRequireDefault(_slideLeft2);

var _slideLeftReturn2 = require('./slide/slideLeftReturn');

var _slideLeftReturn3 = _interopRequireDefault(_slideLeftReturn2);

var _slideRight2 = require('./slide/slideRight');

var _slideRight3 = _interopRequireDefault(_slideRight2);

var _slideRightReturn2 = require('./slide/slideRightReturn');

var _slideRightReturn3 = _interopRequireDefault(_slideRightReturn2);

var _slideUp2 = require('./slide/slideUp');

var _slideUp3 = _interopRequireDefault(_slideUp2);

var _slideUpReturn2 = require('./slide/slideUpReturn');

var _slideUpReturn3 = _interopRequireDefault(_slideUpReturn2);

var _foolishIn2 = require('./math/foolishIn');

var _foolishIn3 = _interopRequireDefault(_foolishIn2);

var _foolishOut2 = require('./math/foolishOut');

var _foolishOut3 = _interopRequireDefault(_foolishOut2);

var _holeIn2 = require('./math/holeIn');

var _holeIn3 = _interopRequireDefault(_holeIn2);

var _holeOut2 = require('./math/holeOut');

var _holeOut3 = _interopRequireDefault(_holeOut2);

var _swashIn2 = require('./math/swashIn');

var _swashIn3 = _interopRequireDefault(_swashIn2);

var _swashOut2 = require('./math/swashOut');

var _swashOut3 = _interopRequireDefault(_swashOut2);

var _tinDownIn2 = require('./tin/tinDownIn');

var _tinDownIn3 = _interopRequireDefault(_tinDownIn2);

var _tinDownOut2 = require('./tin/tinDownOut');

var _tinDownOut3 = _interopRequireDefault(_tinDownOut2);

var _tinLeftIn2 = require('./tin/tinLeftIn');

var _tinLeftIn3 = _interopRequireDefault(_tinLeftIn2);

var _tinLeftOut2 = require('./tin/tinLeftOut');

var _tinLeftOut3 = _interopRequireDefault(_tinLeftOut2);

var _tinRightIn2 = require('./tin/tinRightIn');

var _tinRightIn3 = _interopRequireDefault(_tinRightIn2);

var _tinRightOut2 = require('./tin/tinRightOut');

var _tinRightOut3 = _interopRequireDefault(_tinRightOut2);

var _tinUpIn2 = require('./tin/tinUpIn');

var _tinUpIn3 = _interopRequireDefault(_tinUpIn2);

var _tinUpOut2 = require('./tin/tinUpOut');

var _tinUpOut3 = _interopRequireDefault(_tinUpOut2);

var _bombLeftOut2 = require('./bomb/bombLeftOut');

var _bombLeftOut3 = _interopRequireDefault(_bombLeftOut2);

var _bombRightOut2 = require('./bomb/bombRightOut');

var _bombRightOut3 = _interopRequireDefault(_bombRightOut2);

var _boingInUp2 = require('./boing/boingInUp');

var _boingInUp3 = _interopRequireDefault(_boingInUp2);

var _boingOutDown2 = require('./boing/boingOutDown');

var _boingOutDown3 = _interopRequireDefault(_boingOutDown2);

var _spaceInDown2 = require('./space/spaceInDown');

var _spaceInDown3 = _interopRequireDefault(_spaceInDown2);

var _spaceInLeft2 = require('./space/spaceInLeft');

var _spaceInLeft3 = _interopRequireDefault(_spaceInLeft2);

var _spaceInRight2 = require('./space/spaceInRight');

var _spaceInRight3 = _interopRequireDefault(_spaceInRight2);

var _spaceInUp2 = require('./space/spaceInUp');

var _spaceInUp3 = _interopRequireDefault(_spaceInUp2);

var _spaceOutDown2 = require('./space/spaceOutDown');

var _spaceOutDown3 = _interopRequireDefault(_spaceOutDown2);

var _spaceOutLeft2 = require('./space/spaceOutLeft');

var _spaceOutLeft3 = _interopRequireDefault(_spaceOutLeft2);

var _spaceOutRight2 = require('./space/spaceOutRight');

var _spaceOutRight3 = _interopRequireDefault(_spaceOutRight2);

var _spaceOutUp2 = require('./space/spaceOutUp');

var _spaceOutUp3 = _interopRequireDefault(_spaceOutUp2);

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

//static effects

exports.openDownLeft = _openDownLeft3.default;
exports.openDownLeftReturn = _openDownLeftReturn3.default;
exports.openDownRight = _openDownRight3.default;
exports.openDownRightReturn = _openDownRightReturn3.default;
exports.openUpLeft = _openUpLeft3.default;
exports.openUpLeftReturn = _openUpLeftReturn3.default;
exports.openUpRight = _openUpRight3.default;
exports.openUpRightReturn = _openUpRightReturn3.default;

//static effects out

exports.openDownLeftOut = _openDownLeftOut3.default;
exports.openDownRightOut = _openDownRightOut3.default;
exports.openUpLeftOut = _openUpLeftOut3.default;
exports.openUpRightOut = _openUpRightOut3.default;

//perspective

exports.perspectiveDown = _perspectiveDown3.default;
exports.perspectiveDownReturn = _perspectiveDownReturn3.default;
exports.perspectiveLeft = _perspectiveLeft3.default;
exports.perspectiveLeftReturn = _perspectiveLeftReturn3.default;
exports.perspectiveRight = _perspectiveRight3.default;
exports.perspectiveRightReturn = _perspectiveRightReturn3.default;
exports.perspectiveUp = _perspectiveUp3.default;
exports.perspectiveUpReturn = _perspectiveUpReturn3.default;

//rotate

exports.rotateDownIn = _rotateDownIn3.default;
exports.rotateDownOut = _rotateDownOut3.default;
exports.rotateLeftIn = _rotateLeftIn3.default;
exports.rotateLeftOut = _rotateLeftOut3.default;
exports.rotateRightIn = _rotateRightIn3.default;
exports.rotateRightOut = _rotateRightOut3.default;
exports.rotateUpIn = _rotateUpIn3.default;
exports.rotateUpOut = _rotateUpOut3.default;

//slide

exports.slideDown = _slideDown3.default;
exports.slideDownReturn = _slideDownReturn3.default;
exports.slideLeft = _slideLeft3.default;
exports.slideLeftReturn = _slideLeftReturn3.default;
exports.slideRight = _slideRight3.default;
exports.slideRightReturn = _slideRightReturn3.default;
exports.slideUp = _slideUp3.default;
exports.slideUpReturn = _slideUpReturn3.default;

//math

exports.foolishIn = _foolishIn3.default;
exports.foolishOut = _foolishOut3.default;
exports.holeIn = _holeIn3.default;
exports.holeOut = _holeOut3.default;
exports.swashIn = _swashIn3.default;
exports.swashOut = _swashOut3.default;

//tin

exports.tinDownIn = _tinDownIn3.default;
exports.tinDownOut = _tinDownOut3.default;
exports.tinLeftIn = _tinLeftIn3.default;
exports.tinLeftOut = _tinLeftOut3.default;
exports.tinRightIn = _tinRightIn3.default;
exports.tinRightOut = _tinRightOut3.default;
exports.tinUpIn = _tinUpIn3.default;
exports.tinUpOut = _tinUpOut3.default;

//bomb

exports.bombLeftOut = _bombLeftOut3.default;
exports.bombRightOut = _bombRightOut3.default;

//boing

exports.boingInUp = _boingInUp3.default;
exports.boingOutDown = _boingOutDown3.default;

//space

exports.spaceInDown = _spaceInDown3.default;
exports.spaceInLeft = _spaceInLeft3.default;
exports.spaceInRight = _spaceInRight3.default;
exports.spaceInUp = _spaceInUp3.default;
exports.spaceOutDown = _spaceOutDown3.default;
exports.spaceOutLeft = _spaceOutLeft3.default;
exports.spaceOutRight = _spaceOutRight3.default;
exports.spaceOutUp = _spaceOutUp3.default;