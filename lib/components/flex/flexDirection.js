'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *  flex-direction 布局
 *  r,rs,c,cs
 * */
var flexDirection = exports.flexDirection = function flexDirection(param) {
    var flex = 'display:flex;';
    var direction = 'row';
    switch (param) {
        case 'r':
            direction = 'row';
            break;
        case 'rs':
            direction = 'row-reverse';
            break;
        case 'c':
            direction = 'column';
            break;
        case 'cs':
            direction = 'column-reverse';
            break;
        default:
            direction = 'row';
            break;
    }
    var value = '-webkit-flex-direction:' + direction + ';\n                            -webkit-flex-direction:' + direction + ';\n                            -ms-flex-direction:' + direction + ';\n                            flex-direction:' + direction + ';';
    return typeof param === 'string' ? flex + value : flex;
};