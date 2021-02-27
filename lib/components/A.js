"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n     \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n   \n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n   \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n     ", "\n    ", "\n\n    ", "\n    ", "\n"], ["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n     \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n   \n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n   \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n     ", "\n    ", "\n\n    ", "\n    ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["", ""], ["", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _flexDirection = require("./flex/flexDirection");

var _media_container = require("./media/media_container");

var _flexWrap = require("./flex/flexWrap");

var _justifyContent = require("./flex/justifyContent");

var _alignItems = require("./flex/alignItems");

var _alignContent = require("./flex/alignContent");

var _alignSelf = require("./flex/alignSelf");

var _setBackground = require("./internal/setBackground");

var _getColor = require("./internal/getColor");

var _border = require("./box/border");

var _padding = require("./box/padding");

var _margin = require("./box/margin");

var _media = require("./media/media");

var _opacity = require("./basic/opacity");

var _column = require("./float/column");

var _wh = require("./public/wh");

var _wh2 = _interopRequireDefault(_wh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 改变a链接
                                                                                                                                                   * color,font-size,line-height,border,padding,margin
                                                                                                                                                   * :hover ch,cho 颜色，透明度
                                                                                                                                                   * */


var A = exports.A = _styledComponents2.default.a(_templateObject, function (props) {
  return (0, _wh2.default)(props);
}, function (props) {
  return props['fd'] && (0, _flexDirection.flexDirection)(props['fd']);
}, function (props) {
  return props['dfd'] && _media_container.media_container.desktop(_templateObject2, (0, _flexDirection.flexDirection)(props['dfd']));
}, function (props) {
  return props['tfd'] && _media_container.media_container.tablet(_templateObject2, (0, _flexDirection.flexDirection)(props['tfd']));
}, function (props) {
  return props['pfd'] && _media_container.media_container.phone(_templateObject2, (0, _flexDirection.flexDirection)(props['pfd']));
}, function (props) {
  return props['fw'] && (0, _flexWrap.flexWrap)(props['fw']);
}, function (props) {
  return props['dfw'] && _media_container.media_container.desktop(_templateObject2, (0, _flexWrap.flexWrap)(props['dfw']));
}, function (props) {
  return props['tfw'] && _media_container.media_container.tablet(_templateObject2, (0, _flexWrap.flexWrap)(props['tfw']));
}, function (props) {
  return props['pfw'] && _media_container.media_container.phone(_templateObject2, (0, _flexWrap.flexWrap)(props['pfw']));
}, function (props) {
  return props['jc'] && (0, _justifyContent.justifyContent)(props['jc']);
}, function (props) {
  return props['djc'] && _media_container.media_container.desktop(_templateObject2, (0, _justifyContent.justifyContent)(props['djc']));
}, function (props) {
  return props['tjc'] && _media_container.media_container.tablet(_templateObject2, (0, _justifyContent.justifyContent)(props['tjc']));
}, function (props) {
  return props['pjc'] && _media_container.media_container.phone(_templateObject2, (0, _justifyContent.justifyContent)(props['pjc']));
}, function (props) {
  return props['ai'] && (0, _alignItems.alignItems)(props['ai']);
}, function (props) {
  return props['dai'] && _media_container.media_container.desktop(_templateObject2, (0, _alignItems.alignItems)(props['dai']));
}, function (props) {
  return props['tai'] && _media_container.media_container.tablet(_templateObject2, (0, _alignItems.alignItems)(props['tai']));
}, function (props) {
  return props['pai'] && _media_container.media_container.phone(_templateObject2, (0, _alignItems.alignItems)(props['pai']));
}, function (props) {
  return props['ac'] && (0, _alignContent.alignContent)(props['ac']);
}, function (props) {
  return props['as'] && (0, _alignSelf.alignSelf)(props['as']);
}, function (props) {
  return props['f'] && typeof props['f'] === 'number' && "flex:" + props['f'] + ";";
}, function (props) {
  return props['df'] && _media_container.media_container.desktop(_templateObject2, (0, _flexDirection.flexDirection)(props['df']));
}, function (props) {
  return props['tf'] && _media_container.media_container.tablet(_templateObject2, (0, _flexDirection.flexDirection)(props['tf']));
}, function (props) {
  return props['pf'] && _media_container.media_container.phone(_templateObject2, (0, _flexDirection.flexDirection)(props['pf']));
}, function (props) {
  return props['_o'] && typeof props['_o'] === 'number' && "order:" + props['_o'] + ";";
}, function (props) {
  return props['bg'] && typeof props['bg'] === 'string' && props['g'] ? (0, _setBackground.setBackground)(props['bg'], props['g']) : "background:" + (0, _getColor.getColor)(props['bg'], props['bgo']) + ";";
}, function (props) {
  return props['br'] && typeof props['br'] === 'number' && "border-radius:" + props['br'] + "px;";
}, function (props) {
  return props['c'] && typeof props['c'] === 'string' && "color:" + (0, _getColor.getColor)(props['c'], props['o']) + ";";
}, function (props) {
  return props['fs'] && typeof props['fs'] === 'number' && "font-size:" + props['fs'] + "px;";
}, function (props) {
  return props['dfs'] && _media_container.media_container.desktop(_templateObject2, "font-size:" + props['dfs'] + "px;");
}, function (props) {
  return props['tfs'] && _media_container.media_container.tablet(_templateObject2, "font-size:" + props['tfs'] + "px;");
}, function (props) {
  return props['pfs'] && _media_container.media_container.phone(_templateObject2, "font-size:" + props['pfs'] + "px;");
}, function (props) {
  return props['lh'] && typeof props['lh'] === 'number' && "line-height:" + props['lh'] + "px;";
}, function (props) {
  return props['dlh'] && _media_container.media_container.desktop(_templateObject2, "line-height:" + props['dlh'] + "px;");
}, function (props) {
  return props['tlh'] && _media_container.media_container.tablet(_templateObject2, "line-height:" + props['tlh'] + "px;");
}, function (props) {
  return props['plh'] && _media_container.media_container.phone(_templateObject2, "line-height:" + props['plh'] + "px;");
}, function (props) {
  return (0, _border.border)(props);
}, function (props) {
  return (0, _border.border)(props);
}, function (props) {
  return (0, _padding.padding)(props);
}, function (props) {
  return (0, _margin.margin)(props);
}, function (props) {
  return (0, _media.media)(props);
}, function (props) {
  return (0, _opacity.opacity)(props);
}, function (props) {
  return props['col'] && (0, _column.column)(props);
}, function (props) {
  return props['ch'] && "\n        :hover{transition: all 0.5s;color:" + (0, _getColor.getColor)(props['ch'], props['cho'], true) + ";}\n    ";
}, function (props) {
  return props['bh'] && "\n        :hover{transition: all 0.5s;background:" + (0, _getColor.getColor)(props['bh'], props['bho']) + ";}\n    ";
});