"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    ::-webkit-input-placeholder {color:", ";", "}\n    :-moz-placeholder {color:", ";", "}\n    ::-moz-placeholder {color:", ";", "}\n    :-ms-input-placeholder {color:", ";", "}\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n  \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n        \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"], ["\n    ::-webkit-input-placeholder {color:", ";", "}\n    :-moz-placeholder {color:", ";", "}\n    ::-moz-placeholder {color:", ";", "}\n    :-ms-input-placeholder {color:", ";", "}\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n  \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n        \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]),
    _templateObject2 = _taggedTemplateLiteral(["", ""], ["", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media_container = require("./media/media_container");

var _border = require("./box/border");

var _margin = require("./box/margin");

var _media = require("./media/media");

var _opacity = require("./basic/opacity");

var _setColor = require("./internal/setColor");

var _getButton = require("./internal/getButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 改造input
                                                                                                                                                   * 属性 width,height,border-radius,border,padding,margin
                                                                                                                                                   * 字体 phfs,placeholder font size
                                                                                                                                                   * */


var Input = exports.Input = _styledComponents2.default.input(_templateObject, function (props) {
    return (0, _setColor.setColor)(props);
}, function (props) {
    return props['phfs'] && "font-size:" + props['phfs'] + "px;";
}, function (props) {
    return (0, _setColor.setColor)(props);
}, function (props) {
    return props['phfs'] && "font-size:" + props['phfs'] + "px;";
}, function (props) {
    return (0, _setColor.setColor)(props);
}, function (props) {
    return props['phfs'] && "font-size:" + props['phfs'] + "px;";
}, function (props) {
    return (0, _setColor.setColor)(props);
}, function (props) {
    return props['phfs'] && "font-size:" + props['phfs'] + "px;";
}, function (props) {
    return props['w'] && typeof props['w'] === 'number' && "width:" + props['w'] + "px;";
}, function (props) {
    return props['dw'] && _media_container.media_container.desktop(_templateObject2, "width:" + props['dw'] + "px;");
}, function (props) {
    return props['tw'] && _media_container.media_container.tablet(_templateObject2, "width:" + props['tw'] + "px;");
}, function (props) {
    return props['pw'] && _media_container.media_container.phone(_templateObject2, "width:" + props['pw'] + "px;");
}, function (props) {
    return props['wp'] && typeof props['wp'] === 'number' && "width:" + props['wp'] + "%;";
}, function (props) {
    return props['wwp'] && _media_container.media_container.desktop(_templateObject2, "width:" + props['dwp'] + "%;");
}, function (props) {
    return props['twp'] && _media_container.media_container.tablet(_templateObject2, "width:" + props['twp'] + "%;");
}, function (props) {
    return props['pwp'] && _media_container.media_container.phone(_templateObject2, "width:" + props['pwp'] + "%;");
}, function (props) {
    return props['h'] && typeof props['h'] === 'number' && "height:" + props['h'] + "px;";
}, function (props) {
    return props['dh'] && _media_container.media_container.desktop(_templateObject2, "height:" + props['dh'] + "px;");
}, function (props) {
    return props['th'] && _media_container.media_container.tablet(_templateObject2, "height:" + props['th'] + "px;");
}, function (props) {
    return props['ph'] && _media_container.media_container.phone(_templateObject2, "height:" + props['ph'] + "px;");
}, function (props) {
    return props['hp'] && typeof props['hp'] === 'number' && "height:" + props['hp'] + "%;";
}, function (props) {
    return props['dhp'] && _media_container.media_container.desktop(_templateObject2, "height:" + props['dhp'] + "%;");
}, function (props) {
    return props['thp'] && _media_container.media_container.tablet(_templateObject2, "height:" + props['thp'] + "%;");
}, function (props) {
    return props['php'] && _media_container.media_container.phone(_templateObject2, "height:" + props['php'] + "%;");
}, function (props) {
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
    return props['tl'] && typeof props['tl'] === 'boolean' && "text-align:left;vertical-align:middle;";
}, function (props) {
    return props['tc'] && typeof props['tc'] === 'boolean' && "text-align:center;vertical-align:middle;";
}, function (props) {
    return props['tr'] && typeof props['tr'] === 'boolean' && "text-align:right;vertical-align:middle;";
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