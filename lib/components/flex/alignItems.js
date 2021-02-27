"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignItems = undefined;

var _flex = require("./flex");

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alignItems = exports.alignItems = function alignItems(param) {
  var flex = "display:flex;";
  var value = "align-items:" + _flex2.default[param] + ";";

  return typeof param === 'string' ? flex + value : flex;
}; /*
    *  align-items 布局
    *  fs,fe,c,b,s
    * */