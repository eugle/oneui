"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexDirection = undefined;

var _direction = require("./direction");

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flexDirection = exports.flexDirection = function flexDirection(param) {
  var flex = "display:flex;";
  var value = "flex-direction:" + _direction2.default[param] + ";";

  return typeof param === 'string' ? flex + value : flex;
}; /*
    *  flex-direction 布局
    *  r,rs,c,cs
    * */