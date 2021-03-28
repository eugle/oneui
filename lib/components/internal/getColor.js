'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getColor = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 获得颜色
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * c,o,over:是否激活颜色
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * */


var _color = require('../../styles/color');

var getColor = exports.getColor = function getColor(c, o, over) {
    //判断透明色
    var opacity = o || o === 0 ? o > 9 ? 1 : o === 0 ? 0 : '.' + o : 1;

    var currentColor = void 0;
    //如果是 0,0,0 并指定透明度，直接组合返回;
    if (c && String(c).includes(',') && !String(c).includes('rgba')) {
        currentColor = 'rgba(' + c + ',' + opacity + ')';
    }

    //如果是 16进制 并指定透明度，不处理直接返回，输出提示;
    if (c && String(c).includes('#') && (o === 0 || o)) {
        console.log('#,0');
        currentColor = c;
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && c.length <= 2 && Object.keys(_color.DefaultColor).includes(c)) {
        currentColor = o || o === 0 ? 'rgba(' + _color.DefaultColor[c + 'RGB'] + ',' + opacity + ')' : over ? _color.DefaultColor[c + 'G'] : _color.DefaultColor[c];
    }

    //如果同时给了颜色和透明度 [bg,bgo]
    if (c instanceof Array && c.length) {
        var _c = _slicedToArray(c, 2),
            cc = _c[0],
            _c$ = _c[1],
            co = _c$ === undefined ? 1 : _c$;
        //如果背景是默认单或双数值颜色，判断并组合


        if (cc.length <= 2 && Object.keys(_color.DefaultColor).includes(cc)) {
            currentColor = 'rgba(' + _color.DefaultColor[cc + 'RGB'] + ',' + co + ')';
        }

        //如果是rgba色
        if (String(cc).includes(',') && !String(cc).includes('rgba')) {
            currentColor = 'rgba(' + cc + ',' + co + ')';
        }

        //如果是#十六进制色
        if (String(cc).includes('#')) {
            currentColor = cc;
        }
    }

    return currentColor;
};