'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getColor = undefined;

var _color = require('../../styles/color');

var getColor = exports.getColor = function getColor(c, o, over) {
    //判断透明色
    var opacity = o || o === 0 ? o > 9 ? 1 : o === 0 ? 0 : '.' + o : 1;

    //如果是 0,0,0 并指定透明度，直接组合返回;
    if (c && String(c).includes(',')) {
        c = 'rgba(' + c + ',' + opacity + ')';
    }

    //如果是 16进制 并指定透明度，不处理直接返回，输出提示;
    if (c && String(c).includes('#') && (o === 0 || o)) {
        console.log('想要背景透明度生效必须指定RGB颜色: 0,0,0');
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && c.length <= 2) {
        switch (c) {
            case 'p':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.primaryRGB + ',' + opacity + ')' : over ? _color.DefaultColor.primaryG : _color.DefaultColor.primary;
                break;
            case 's':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.successRGB + ',' + opacity + ')' : over ? _color.DefaultColor.successG : _color.DefaultColor.success;
                break;
            case 'd':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.dangerRGB + ',' + opacity + ')' : over ? _color.DefaultColor.dangerG : _color.DefaultColor.danger;
                break;
            case 'w':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.warningRGB + ',' + opacity + ')' : over ? _color.DefaultColor.warningG : _color.DefaultColor.warning;
                break;
            case 'i':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.infoRGB + ',' + opacity + ')' : over ? _color.DefaultColor.infoG : _color.DefaultColor.info;
                break;
            case 'ff':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.ffRGB + ',' + opacity + ')' : over ? _color.DefaultColor.ffG : _color.DefaultColor.ff;
                break;
            case 'fe':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.feRGB + ',' + opacity + ')' : over ? _color.DefaultColor.feG : _color.DefaultColor.fe;
                break;
            case 'fc':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.fcRGB + ',' + opacity + ')' : over ? _color.DefaultColor.fcG : _color.DefaultColor.fc;
                break;
            case 'f9':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f9RGB + ',' + opacity + ')' : over ? _color.DefaultColor.f9G : _color.DefaultColor.f9;
                break;
            case 'f6':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f6RGB + ',' + opacity + ')' : over ? _color.DefaultColor.f6G : _color.DefaultColor.f6;
                break;
            case 'f3':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f3RGB + ',' + opacity + ')' : over ? _color.DefaultColor.f3G : _color.DefaultColor.f3;
                break;
            case 'f0':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f0RGB + ',' + opacity + ')' : over ? _color.DefaultColor.f0G : _color.DefaultColor.f0;
                break;
            case 'bg':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bgRGB + ',' + opacity + ')' : over ? _color.DefaultColor.bgG : _color.DefaultColor.bg;
                break;
            case 'bp':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bpRGB + ',' + opacity + ')' : over ? _color.DefaultColor.bpG : _color.DefaultColor.bp;
                break;
            case 'bs':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bsRGB + ',' + opacity + ')' : over ? _color.DefaultColor.bsG : _color.DefaultColor.bs;
                break;
            case 'bd':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bdRGB + ',' + opacity + ')' : over ? _color.DefaultColor.bdG : _color.DefaultColor.bd;
                break;
            case 'bw':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bwRGB + ',' + opacity + ')' : over ? _color.DefaultColor.bwG : _color.DefaultColor.bw;
                break;
            case 'bi':
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.biRGB + ',' + opacity + ')' : over ? _color.DefaultColor.biG : _color.DefaultColor.bi;
                break;
            default:
                c = o || o === 0 ? 'rgba(' + _color.DefaultColor.ffRGB + ',' + opacity + ')' : '';
                break;
        }
    }
    return c;
}; /*
    * 获得颜色
    * c,o,over:是否激活颜色
    * */