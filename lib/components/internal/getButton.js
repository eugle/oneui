"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getButton = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                               * 按钮默认样式
                                                                                                                                                                                                                                                                               * padding,font-size,color,border-radius
                                                                                                                                                                                                                                                                               * 大小 size: xs,s,m,l
                                                                                                                                                                                                                                                                               * 背景 bg,bgo
                                                                                                                                                                                                                                                                               * 颜色 c,co
                                                                                                                                                                                                                                                                               * 透明度 o
                                                                                                                                                                                                                                                                               * 圆角 r
                                                                                                                                                                                                                                                                               * 边框透明 bro
                                                                                                                                                                                                                                                                               * */


var _color = require("../../styles/color");

var _getColor = require("./getColor");

var _getGradient3 = require("./getGradient");

var getButton = exports.getButton = function getButton(props, type) {
    var xs = props.xs,
        s = props.s,
        l = props.l,
        xl = props.xl,
        bg = props.bg,
        bgo = props.bgo,
        g = props.g,
        c = props.c,
        co = props.co,
        b = props.b,
        bt = props.bt,
        br = props.br,
        bb = props.bb,
        bl = props.bl,
        bro = props.bro,
        _props$i = props.i,
        i = _props$i === undefined ? false : _props$i,
        fs = props.fs,
        pfs = props.pfs,
        cp = props.cp,
        cd = props.cd;
    var r = props.r;

    var rounded = '';

    var style = "\n    outline: none;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-image: none;\n    -webkit-writing-mode: horizontal-tb !important;\n    ";

    var singer = bgo && Array.isArray(bgo) && bgo.length === 1 && bgo[0];
    var background = bgo === 0 || singer === 0 && !bg ? 'rgba(255,255,255,0)' : (0, _getColor.getColor)(bg, bgo);
    var color = (0, _getColor.getColor)(c, co);

    var padding = type === 'button' ? '6px 16px' : '6px',
        border = "1px solid " + _color.DefaultColor.fc + ";",
        fontSize = fs || pfs || 12,
        borderRadius = type === 'button' ? '3px' : '0',
        lineHeight = '1.42857143';

    if (xs) {
        padding = type === 'button' ? '1px 9px' : '1px 5px';
        lineHeight = i ? '1.4' : '1.6';
    }
    if (s) {
        padding = type === 'button' ? '5px 14px' : '5px';
        lineHeight = '1.5';
    }
    if (l) {
        padding = type === 'button' ? '8px 20px' : '8px';
        lineHeight = '1.33333';
    }
    if (xl) {
        padding = type === 'button' ? '12px 28px' : '12px';
        lineHeight = '1.33333';
        fontSize = fs || pfs || 14;
    }
    if (r) {
        if (typeof r === 'number') {
            rounded = r + "px";
        }
        if ((typeof r === "undefined" ? "undefined" : _typeof(r)) === 'object') {
            r.forEach(function (i) {
                return rounded = rounded + (i + "px ");
            });
        }
    }

    var textColor = _color.DefaultColor.f6;
    if (c) {
        textColor = color;
    } else {
        if (bg && bg !== 'fe' && (!bgo || bgo !== 0 || singer !== 0)) {
            textColor = _color.DefaultColor.ff;
        }
        if (bg && (bgo === 0 || singer === 0)) {
            textColor = (0, _getColor.getColor)(bg);
        }
        if ((bg === 'ff' || bg === 'fe' || bg === '255,255,255') && !bgo && !c) {
            textColor = _color.DefaultColor.f3;
        }
        if ((bg === 'f0' || bg === 'f3' || bg === '0,0,0') && !bgo && !c) {
            textColor = _color.DefaultColor.fe;
        }
    }

    if (!cp && !cd && type === 'button') {
        style += "cursor:pointer;";
    }
    if (background && !g) {
        style += "background:" + background + ";";
    }
    if (type === 'button') {
        style += "text-align: center; touch-action: manipulation;-webkit-appearance: button;";
    }
    if (g) {
        var _getGradient = (0, _getGradient3.getGradient)(bg),
            _getGradient2 = _slicedToArray(_getGradient, 2),
            gs = _getGradient2[0],
            ge = _getGradient2[1];

        var gradient = "\n        background-color: " + gs + ";\n        background-image: linear-gradient(" + g + "deg, " + gs + " 0%, " + ge + " 100%);\n    ";
        style += gradient;
    }

    return style + ("\n        padding:" + padding + ";\n        font-size:" + fontSize + "px;\n        " + (!b && !bt && !br && !bb && !bl ? "border:" + (bgo === 0 || bg ? "1px solid " + (0, _getColor.getColor)(bg, bro) + ";" : border) : '') + "\n        border-radius:" + (r === 0 ? '0' : rounded || borderRadius) + ";\n        color:" + textColor + ";\n        line-height:" + lineHeight + ";\n    ");
};