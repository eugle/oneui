"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBackground = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 设置背景渐变
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * */


var _getGradient3 = require("./getGradient");

var setBackground = exports.setBackground = function setBackground(bg, g) {
    var _getGradient = (0, _getGradient3.getGradient)(bg),
        _getGradient2 = _slicedToArray(_getGradient, 2),
        gs = _getGradient2[0],
        ge = _getGradient2[1];

    return "\n        background-color: " + gs + ";\n        background-image: -webkit-linear-gradient(" + g + "deg, " + gs + " 0%, " + ge + " 100%);\n        background-image: -moz-linear-gradient(" + g + "deg, " + gs + " 0%, " + ge + " 100%);\n        background-image: -o-linear-gradient(" + g + "deg, " + gs + " 0%, " + ge + " 100%);\n        background-image: -ms-linear-gradient(" + g + "deg, " + gs + " 0%, " + ge + " 100%);\n        background-image: linear-gradient(" + g + "deg, " + gs + " 0%, " + ge + " 100%);\n    ";
};