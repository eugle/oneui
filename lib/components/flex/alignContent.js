"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignContent = undefined;

var _flex = require("./flex");

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alignContent = exports.alignContent = function alignContent(param) {
  var flex = "display:flex;";
  var value = "align-content:" + _flex2.default[param] + ";";

  return typeof param === 'string' ? flex + value : flex;
}; /*
    *  align-content 布局
    *  fs,fe,c,sb,sa
    * */