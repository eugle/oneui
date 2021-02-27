"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexWrap = undefined;

var _direction = require("./direction");

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flexWrap = exports.flexWrap = function flexWrap(param) {
  var flex = "display:flex;";
  var value = "flex-wrap:" + _direction2.default[param] + ";";

  return typeof param === 'string' ? flex + value : flex;
}; /*
    *  flex-wrap 布局
    *  w,ws
    * */