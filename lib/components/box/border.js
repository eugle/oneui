'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.border = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 定义边框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @标签 b: 全边框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @标签 bt,br,bb,bl 定义上右下边框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @params: 顺序，size，type，color，opacity
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * */


var _getColor = require('../internal/getColor');

var border = exports.border = function border(_ref) {
    var b = _ref.b,
        bt = _ref.bt,
        br = _ref.br,
        bb = _ref.bb,
        bl = _ref.bl;

    var getBorder = function getBorder(params) {
        var _params = _slicedToArray(params, 4),
            size = _params[0],
            _params$ = _params[1],
            type = _params$ === undefined ? 'solid' : _params$,
            _params$2 = _params[2],
            c = _params$2 === undefined ? '#fff' : _params$2,
            o = _params[3];

        if (type) {
            switch (type) {
                case 'd':
                    type = 'dashed';
                    break;
                default:
                    type = 'solid';
                    break;
            }
        }
        var color = (0, _getColor.getColor)(c, o);
        return size + 'px ' + type + ' ' + color;
    };

    var border = '';
    if (b && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
        border = 'border:' + getBorder(b) + ';';
    }
    if (bt && (typeof bt === 'undefined' ? 'undefined' : _typeof(bt)) === 'object') {
        border = border + ' border-top:' + getBorder(bt) + ';';
    }
    if (br && (typeof br === 'undefined' ? 'undefined' : _typeof(br)) === 'object') {
        border = border + ' border-right:' + getBorder(br) + ';';
    }
    if (bb && (typeof bb === 'undefined' ? 'undefined' : _typeof(bb)) === 'object') {
        border = border + ' border-bottom:' + getBorder(bb) + ';';
    }
    if (bl && (typeof bl === 'undefined' ? 'undefined' : _typeof(bl)) === 'object') {
        border = border + ' border-left:' + getBorder(bl) + ';';
    }
    return border;
};