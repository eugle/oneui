'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * 透明度
 * @param: o, number, ho: number
 * */
var opacity = exports.opacity = function opacity(_ref) {
    var o = _ref.o,
        ho = _ref.ho;

    var opacity = '';
    if (o === 0) {
        opacity = 'opacity:0;transition: all 0.5s;';
    }
    if (o && typeof o === 'number') {
        opacity = o > 9 ? 'opacity:1;' : 'opacity:.' + o + ';transition: all 0.5s;';
    }
    if (ho === 0) {
        opacity += ':hover{opacity:0;transition: all 0.5s;}';
    }
    if (ho && typeof o === 'number') {
        opacity += ':hover{opacity:' + (ho > 9 ? 1 : '.' + ho) + ';transition: all 0.5s;}';
    }
    return opacity;
};