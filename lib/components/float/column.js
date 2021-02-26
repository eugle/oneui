"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * 定义列的百分比
 * @param: column, 1~10
 * */
var column = exports.column = function column(_ref) {
    var col = _ref.col;

    var current = Number(col - 1);
    if (current >= 0) {
        var percentage = [8.33333333, 16.66666667, 25, 33.33333333, 41.66666667, 50, 58.33333333, 66.66666667, 75, 83.33333333, 91.66666667, 100];
        return "width:" + percentage[current] + "%;";
    }
};