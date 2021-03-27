"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGradient = undefined;

var _color = require("../../styles/color");

var getGradient = exports.getGradient = function getGradient(bg) {
    if (bg && typeof bg === "string") {
        return [Object.keys(_color.DefaultColor).includes(bg) ? _color.DefaultColor[bg] : bg, Object.keys(_color.DefaultColor).includes(bg) ? _color.DefaultColor[bg + 'G'] : bg + 'G'];
    } else {
        return [];
    }
}; /*
    * 获得渐变
    * */