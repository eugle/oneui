"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGradient = undefined;

var _color = require("../../styles/color");

var _color2 = require("../basic/color");

var _color3 = _interopRequireDefault(_color2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 获得渐变
 * */
var getGradient = exports.getGradient = function getGradient(bg) {
    if (bg && typeof bg === "string") {
        return [Object.keys(_color3.default).includes(bg) ? _color.DefaultColor[bg] : bg, Object.keys(_color3.default).includes(bg) ? _color.DefaultColor[bg + 'G'] : bg + 'G'];
    } else {
        return [];
    }
};