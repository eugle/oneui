'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *  align-self 布局
 *  fs,fe,c,b,s
 * */
var alignSelf = exports.alignSelf = function alignSelf(param) {
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
            content = 'auto';
            break;
    }
    var value = '-webkit-align-self:' + content + ';\n                            -webkit-align-self:' + content + ';\n                            -ms-align-self:' + content + ';\n                            align-self:' + content + ';';
    return typeof param === 'string' ? flex + value : flex;
};