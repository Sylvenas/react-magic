'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Composes a variable number of CSS helper functions.
 * Returns a function that accepts all the original arguments
 * of the functions it composed. If the original function
 * accepted multiple arguments, they must be passed as
 * an array.
 * @example
 * const translateXandRotateY = compose(translateX, rotateY);
 * const cssValue = translateXandRotateY('-5px', '30deg');
 */
var compose = exports.compose = function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, styleArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      styleArgs[_key2] = arguments[_key2];
    }

    var result = funcs.reduce(function (acc, func, i) {
      var arg = styleArgs[i];
      return acc + ' ' + (Array.isArray(arg) ? func.apply(undefined, _toConsumableArray(arg)) : func(arg));
    }, '');
    return result.trim();
  };
};
var cubicBezier = exports.cubicBezier = function cubicBezier(a, b, c, d) {
  return 'cubic-bezier(' + a + ', ' + b + ', ' + c + ', ' + d + ')';
};

var translate3d = exports.translate3d = function translate3d(a, b, c) {
  return 'translate3d(' + a + ', ' + b + ', ' + c + ')';
};

var translateX = exports.translateX = function translateX(a) {
  return 'translateX(' + a + ')';
};

var scale3d = exports.scale3d = function scale3d(a, b, c) {
  return 'scale3d(' + a + ', ' + b + ', ' + c + ')';
};

var scale = exports.scale = function scale(a) {
  return 'scale(' + a + ')';
};

var skewX = exports.skewX = function skewX(deg) {
  return 'skewX(' + deg + 'deg)';
};

var skewY = exports.skewY = function skewY(deg) {
  return 'skewY(' + deg + 'deg)';
};

var skewXY = exports.skewXY = function skewXY(x, y) {
  return skewX(x) + ' ' + skewY(y);
};

var rotateY = exports.rotateY = function rotateY(a) {
  return 'rotateY(' + a + 'deg)';
};

var rotate3d = exports.rotate3d = function rotate3d(a, b, c, d) {
  return 'rotate3d(' + a + ', ' + b + ', ' + c + ', ' + d + 'deg)';
};

var perspective = exports.perspective = function perspective(a) {
  return 'perspective(' + a + ')';
};

var translateY = exports.translateY = function translateY(a) {
  return 'translateY(' + a + ')';
};

var translateZ = exports.translateZ = function translateZ(a) {
  return 'translateZ(' + a + ')';
};

var translateXY = exports.translateXY = function translateXY(a, b) {
  return 'translate(' + a + ',' + b + ')';
};

var rotate = exports.rotate = function rotate(a) {
  return 'rotate(' + a + 'deg)';
};

var rotateX = exports.rotateX = function rotateX(a) {
  return 'rotateX(' + a + 'deg)';
};

var blur = exports.blur = function blur(a) {
  return 'blur(' + a + ')';
};