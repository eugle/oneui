"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexWrap = undefined;

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flexWrap = exports.flexWrap = function flexWrap(param) {
  var flex = "display:flex;";
  var value = "flex-wrap:" + _wrap2.default[param] + ";";

  return typeof param === 'string' ? flex + value : flex;
}; /*
    *  flex-wrap 布局
    *  w,ws
    * */