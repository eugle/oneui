"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\t", "\n   \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    word-wrap:break-word;\n"], ["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\t", "\n   \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    word-wrap:break-word;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["", ""], ["", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media_container = require("./media/media_container");

var _border = require("./box/border");

var _margin = require("./box/margin");

var _media = require("./media/media");

var _opacity = require("./basic/opacity");

var _getButton = require("./internal/getButton");

var _wh = require("./public/wh");

var _wh2 = _interopRequireDefault(_wh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 改造 textarea
                                                                                                                                                   * 其它属性同 input
                                                                                                                                                   * ro:  可见行数，数字
                                                                                                                                                   * */


var Textarea = exports.Textarea = _styledComponents2.default.textarea(_templateObject, function (props) {
  return props['br'] && typeof props['br'] === 'number' && "border-radius:" + props['br'] + "px;";
}, function (props) {
  return props['a'] && typeof props['a'] === 'boolean' && "width:100%;";
}, function (props) {
  return props['fs'] && typeof props['fs'] === 'number' && "font-size:" + props['fs'] + "px;";
}, function (props) {
  return props['dfs'] && _media_container.media_container.desktop(_templateObject2, "font-size:" + props['dfs'] + "px;");
}, function (props) {
  return props['tfs'] && _media_container.media_container.tablet(_templateObject2, "font-size:" + props['tfs'] + "px;");
}, function (props) {
  return props['pfs'] && _media_container.media_container.phone(_templateObject2, "font-size:" + props['pfs'] + "px;");
}, function (props) {
  return props['mpfs'] && _media_container.media_container.miniPhone(_templateObject2, "font-size:" + props['pfs'] + "px;");
}, function (props) {
  return props['ro'] && "rows:" + props['ro'] + ";";
}, function (props) {
  return (0, _wh2.default)(props);
}, function (props) {
  return (0, _border.border)(props);
}, function (props) {
  return (0, _margin.margin)(props);
}, function (props) {
  return (0, _getButton.getButton)(props, 'input');
}, function (props) {
  return (0, _media.media)(props);
}, function (props) {
  return (0, _opacity.opacity)(props);
});