'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getColor = undefined;

var _color = require('../../styles/color');

var _color2 = require('../basic/color');

var _color3 = _interopRequireDefault(_color2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 获得颜色
 * c,o,over:是否激活颜色
 * */
var getColor = exports.getColor = function getColor(c, o, over) {
    //判断透明色
    var opacity = o || o === 0 ? o > 9 ? 1 : o === 0 ? 0 : '.' + o : 1;

    //如果是 0,0,0 并指定透明度，直接组合返回;
    if (c && String(c).includes(',') && !String(c).includes('rgba')) {
        c = 'rgba(' + c + ',' + opacity + ')';
    }

    //如果是 16进制 并指定透明度，不处理直接返回，输出提示;
    if (c && String(c).includes('#') && (o === 0 || o)) {
        console.log('Not a rgba: 0,0,0');
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && c.length <= 2) {
        var current = Object.keys(_color3.default).includes(c) ? _color3.default[c] : c;
        c = o || o === 0 ? 'rgba(' + _color.DefaultColor[current + 'RGB'] + ',' + opacity + ')' : over ? _color.DefaultColor[current + 'G'] : _color.DefaultColor[current];
    }
    return c;
};