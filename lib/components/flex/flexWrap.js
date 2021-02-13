'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *  flex-wrap 布局
 *  w,ws
 * */
var flexWrap = exports.flexWrap = function flexWrap(param) {
    var flex = 'display:flex;';
    var wrap = void 0;
    switch (param) {
        case 'w':
            wrap = 'wrap';
            break;
        case 'ws':
            wrap = 'wrap-reverse';
            break;
        default:
            wrap = 'nowrap';
            break;
    }
    var value = '-webkit-flex-wrap:' + wrap + ';\n                            -webkit-flex-wrap:' + wrap + ';\n                            -ms-flex-wrap:' + wrap + ';\n                            flex-wrap:' + wrap + ';';
    return typeof param === 'string' ? flex + value : flex;
};