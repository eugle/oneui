'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *  align-items 布局
 *  fs,fe,c,b,s
 * */
var alignItems = exports.alignItems = function alignItems(param) {
    var flex = 'display:flex;';
    var content = void 0;
    switch (param) {
        case 'fs':
            content = 'flex-start';
            break;
        case 'fe':
            content = 'flex-end';
            break;
        case 'c':
            content = 'center';
            break;
        case 'b':
            content = 'baseline';
            break;
        case 's':
            content = 'stretch';
            break;
        default:
            content = 'flex-start';
            break;
    }
    var value = '-webkit-align-items:' + content + ';\n                            -webkit-align-items:' + content + ';\n                            -ms-align-items:' + content + ';\n                            align-items:' + content + ';';
    return typeof param === 'string' ? flex + value : flex;
};