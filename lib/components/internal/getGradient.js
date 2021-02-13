'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGradient = undefined;

var _color = require('../../styles/color');

var getGradient = exports.getGradient = function getGradient(bg) {
    var gs = '',
        ge = '';
    switch (bg) {
        case 'p':
            gs = _color.DefaultColor.primary;
            ge = _color.DefaultColor.primaryG;
            break;
        case 's':
            gs = _color.DefaultColor.success;
            ge = _color.DefaultColor.successG;
            break;
        case 'd':
            gs = _color.DefaultColor.danger;
            ge = _color.DefaultColor.dangerG;
            break;
        case 'w':
            gs = _color.DefaultColor.warning;
            ge = _color.DefaultColor.warningG;
            break;
        case 'i':
            gs = _color.DefaultColor.info;
            ge = _color.DefaultColor.infoG;
            break;
        case 'ff':
            gs = _color.DefaultColor.ff;
            ge = _color.DefaultColor.ffG;
            break;
        case 'fe':
            gs = _color.DefaultColor.fe;
            ge = _color.DefaultColor.feG;
            break;
        case 'fc':
            gs = _color.DefaultColor.fc;
            ge = _color.DefaultColor.fcG;
            break;
        case 'f9':
            gs = _color.DefaultColor.f9;
            ge = _color.DefaultColor.f9G;
            break;
        case 'f6':
            gs = _color.DefaultColor.f6;
            ge = _color.DefaultColor.f6G;
            break;
        case 'f3':
            gs = _color.DefaultColor.f3;
            ge = _color.DefaultColor.f3G;
            break;
        default:
            gs = _color.DefaultColor.ff;
            ge = _color.DefaultColor.ffG;
            break;
    }
    return [gs, ge];
}; /*
    * 获得渐变
    * */