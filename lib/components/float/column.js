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

    var percentage = void 0;
    switch (Number(col)) {
        case 1:
            percentage = 8.33333333;
            break;
        case 2:
            percentage = 16.66666667;
            break;
        case 3:
            percentage = 25;
            break;
        case 4:
            percentage = 33.33333333;
            break;
        case 5:
            percentage = 41.66666667;
            break;
        case 6:
            percentage = 50;
            break;
        case 7:
            percentage = 58.33333333;
            break;
        case 8:
            percentage = 66.66666667;
            break;
        case 9:
            percentage = 75;
            break;
        case 10:
            percentage = 83.33333333;
            break;
        case 11:
            percentage = 91.66666667;
            break;
        case 12:
            percentage = 100;
            break;
        default:
            percentage = 100;
            break;
    }
    return "width:" + percentage + "%;";
};