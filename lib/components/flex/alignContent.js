'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *  align-content 布局
 *  fs,fe,c,sb,sa
 * */
var alignContent = exports.alignContent = function alignContent(param) {
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
        case 'sb':
            content = 'space-between';
            break;
        case 'sa':
            content = 'space-around';
            break;
        case 's':
            content = 'stretch';
            break;
        default:
            content = 'flex-start';
            break;
    }
    var value = '-webkit-align-content:' + content + ';\n                            -webkit-align-content:' + content + ';\n                            -ms-align-content:' + content + ';\n                            align-content:' + content + ';';
    return typeof param === 'string' ? flex + value : flex;
};