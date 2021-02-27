"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(["\n    object-fit:cover;\n    ", "\n    ", "\n\n    ", "\n    ", "\n\n     ", "\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", ";\n    ", " \n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"], ["\n    object-fit:cover;\n    ", "\n    ", "\n\n    ", "\n    ", "\n\n     ", "\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", ";\n    ", " \n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["", ""], ["", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media_container = require("./media/media_container");

var _border = require("./box/border");

var _rounded = require("./advance/rounded");

var _padding = require("./box/padding");

var _margin = require("./box/margin");

var _media = require("./media/media");

var _opacity = require("./basic/opacity");

var _wh = require("./public/wh");

var _wh2 = _interopRequireDefault(_wh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 改造img
                                                                                                                                                   * 属性 width,height,border-radius,border,padding,margin
                                                                                                                                                   * */


var Img = exports.Img = _styledComponents2.default.img(_templateObject, function (props) {
  return props['xw'] && typeof props['xw'] === 'number' && "max-width:" + props['xw'] + "px;";
}, function (props) {
  return props['nw'] && typeof props['nw'] === 'number' && "min-width:" + props['nw'] + "px;";
}, function (props) {
  return props['xwp'] && typeof props['xwp'] === 'number' && "max-width:" + props['xwp'] + "%;";
}, function (props) {
  return props['nwp'] && typeof props['nwp'] === 'number' && "min-width:" + props['nwp'] + "%;";
}, function (props) {
  return props['xh'] && typeof props['xh'] === 'number' && "max-height:" + props['xh'] + "px;";
}, function (props) {
  return props['nh'] && typeof props['nh'] === 'number' && "min-height:" + props['nh'] + "px;";
}, function (props) {
  return props['xhp'] && typeof props['xhp'] === 'number' && "max-height:" + props['xhp'] + "%;";
}, function (props) {
  return props['nhp'] && typeof props['nhp'] === 'number' && "min-height:" + props['nhp'] + "%;";
}, function (props) {
  return props['w'] && typeof props['w'] === 'number' && "width:" + props['w'] + "px;";
}, function (props) {
  return props['dw'] && _media_container.media_container.desktop(_templateObject2, "width:" + props['dw'] + "px;");
}, function (props) {
  return props['tw'] && _media_container.media_container.tablet(_templateObject2, "width:" + props['tw'] + "px;");
}, function (props) {
  return props['pw'] && _media_container.media_container.phone(_templateObject2, "width:" + props['pw'] + "px;");
}, function (props) {
  return props['br'] && typeof props['br'] === 'number' && "border-radius:" + props['br'] + "px;";
}, function (props) {
  return props['bs'] && _typeof(props['bs']) === 'object' && "box-shadow:" + props['bs'][0] + "px " + props['bs'][1] + "px " + props['bs'][2] + "px rgba(0,0,0," + props['bs'][3] + ");";
}, function (props) {
  return (0, _wh2.default)(props);
}, function (props) {
  return (0, _border.border)(props);
}, function (props) {
  return (0, _rounded.rounded)(props);
}, function (props) {
  return (0, _padding.padding)(props);
}, function (props) {
  return (0, _margin.margin)(props);
}, function (props) {
  return (0, _media.media)(props);
}, function (props) {
  return (0, _opacity.opacity)(props);
});