"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GlobalColor = undefined;

var _color = require("../styles/color");

var GlobalColor = exports.GlobalColor = function GlobalColor() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        primary = _ref.primary,
        primaryRGB = _ref.primaryRGB,
        primaryG = _ref.primaryG,
        success = _ref.success,
        successRGB = _ref.successRGB,
        successG = _ref.successG,
        danger = _ref.danger,
        dangerRGB = _ref.dangerRGB,
        dangerG = _ref.dangerG,
        warning = _ref.warning,
        warningRGB = _ref.warningRGB,
        warningG = _ref.warningG,
        info = _ref.info,
        infoRGB = _ref.infoRGB,
        infoG = _ref.infoG;

    if (primary) {
        _color.DefaultColor.primary = primary;
    }
    if (primaryRGB) {
        _color.DefaultColor.primaryRGB = primaryRGB;
    }
    if (primaryG) {
        _color.DefaultColor.primaryG = primaryG;
    }
    if (success) {
        _color.DefaultColor.success = success;
    }
    if (successRGB) {
        _color.DefaultColor.successRGB = successRGB;
    }
    if (successG) {
        _color.DefaultColor.successG = successG;
    }
    if (danger) {
        _color.DefaultColor.danger = danger;
    }
    if (dangerRGB) {
        _color.DefaultColor.dangerRGB = dangerRGB;
    }
    if (dangerG) {
        _color.DefaultColor.dangerG = dangerG;
    }
    if (warning) {
        _color.DefaultColor.warning = warning;
    }
    if (warningRGB) {
        _color.DefaultColor.warningRGB = warningRGB;
    }
    if (warningG) {
        _color.DefaultColor.warningG = warningG;
    }
    if (info) {
        _color.DefaultColor.info = info;
    }
    if (infoRGB) {
        _color.DefaultColor.infoRGB = infoRGB;
    }
    if (infoG) {
        _color.DefaultColor.infoG = infoG;
    }
};