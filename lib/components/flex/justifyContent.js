'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *  justify-content 布局
 *  fs,fe,c,sb,sa
 * */
var justifyContent = exports.justifyContent = function justifyContent(param) {
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
        default:
            content = 'flex-start';
            break;
    }
    var value = '-webkit-justify-content:' + content + ';\n                            -webkit-justify-content:' + content + ';\n                            -ms-justify-content:' + content + ';\n                            justify-content:' + content + ';';
    return typeof param === 'string' ? flex + value : flex;
};