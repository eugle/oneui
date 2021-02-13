'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setColor = undefined;

var _getColor = require('./getColor');

var setColor = exports.setColor = function setColor(_ref) {
    var c = _ref.c,
        b = _ref.b,
        bg = _ref.bg;

    var color = '#333';
    if (b) {
        color = (0, _getColor.getColor)(b[2], 5);
    }
    if (bg) {
        color = 'rgba(255,255,255,.5)';
    }
    if (c) {
        color = (0, _getColor.getColor)(c, 5);
    }
    return color;
}; /*
    * 设置输入框placeholder颜色
    * */