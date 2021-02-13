'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * 定义圆角
 * @param: number,全部。[1,1,1,1]，指定四个角,上右下左
 */
var rounded = exports.rounded = function rounded(_ref) {
    var r = _ref.r;

    var rounded = '';
    if (r) {
        if (typeof r === 'number') {
            rounded = r + 'px';
        }
        if ((typeof r === 'undefined' ? 'undefined' : _typeof(r)) === 'object') {
            r.forEach(function (i) {
                return rounded = rounded + (i + 'px ');
            });
        }
    }
    return 'border-radius:' + (r === 0 ? '0' : rounded) + ';';
};