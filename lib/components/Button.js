"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(["\n\ttransition: all 0.5s;\n\t:focus {outline:none};\n\t:focus {outline:none !important};\n    :hover {\n    \ttransition: all 0.5s;\n        background: ", "\n        ", "\n    }\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n     \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n   \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", " \n        \n    ", "\n    ", " \n    ", " \n    \n"], ["\n\ttransition: all 0.5s;\n\t:focus {outline:none};\n\t:focus {outline:none !important};\n    :hover {\n    \ttransition: all 0.5s;\n        background: ", "\n        ", "\n    }\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n     \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n   \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", " \n        \n    ", "\n    ", " \n    ", " \n    \n"]),
    _templateObject2 = _taggedTemplateLiteral(["", ""], ["", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _getColor = require("./internal/getColor");

var _border = require("./box/border");

var _margin = require("./box/margin");

var _media = require("./media/media");

var _opacity = require("./basic/opacity");

var _flexDirection = require("./flex/flexDirection");

var _media_container = require("./media/media_container");

var _flexWrap = require("./flex/flexWrap");

var _justifyContent = require("./flex/justifyContent");

var _alignItems = require("./flex/alignItems");

var _alignContent = require("./flex/alignContent");

var _alignSelf = require("./flex/alignSelf");

var _column = require("./float/column");

var _getButton = require("./internal/getButton");

var _buttonIcon = require("./internal/buttonIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 改造button
                                                                                                                                                   * 属性 width,height,border-radius,border,padding,margin
                                                                                                                                                   * 全宽 a
                                                                                                                                                   * */


var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
    return props['bg'] ? (0, _getColor.getColor)(props['bg'], props['bgo'], true) : '#fff;';
}, function (props) {
    return (props['bgo'] || props['bgo'] === 0) && "border:" + (props.b ? props.b[0] : "1") + "px " + (props.b && props.b[1] && props.b[1] === 'd' ? "dashed" : "solid") + " " + (0, _getColor.getColor)(props.b ? props.b[2] : props['bg'] || '#ccc', null, 1) + "\n            color:" + (0, _getColor.getColor)(props.b ? props.b[2] : props['bgo'] === 0 ? props['bg'] : '', null, 1) + "\n        ";
}, function (props) {
    return (0, _border.border)(props);
}, function (props) {
    return (0, _margin.margin)(props);
}, function (props) {
    return (0, _getButton.getButton)(props, 'button');
}, function (props) {
    return (0, _media.media)(props);
}, function (props) {
    return (0, _opacity.opacity)(props);
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
    return props['w'] && typeof props['w'] === 'number' && "width:" + props['w'] + "px;";
}, function (props) {
    return props['h'] && typeof props['h'] === 'number' && "height:" + props['h'] + "px;";
}, function (props) {
    return props['br'] && typeof props['br'] === 'number' && "border-radius:" + props['br'] + "px;";
}, function (props) {
    return props['a'] && typeof props['a'] === 'boolean' && "width:100%;";
}, function (props) {
    return props['col'] && (0, _column.column)(props);
}, function (props) {
    return props['_pr'] && typeof props['_pr'] === 'boolean' && "position:relative;";
}, function (props) {
    return props['_pa'] && typeof props['_pa'] === 'boolean' && "position:absolute;width:100%;";
}, function (props) {
    return props['_pf'] && typeof props['_pf'] === 'boolean' && "position:fixed;width:100%;";
}, function (props) {
    return props['_pi'] && typeof props['_pi'] === 'boolean' && "position:inherit;";
}, function (props) {
    return props['_z'] && typeof props['_z'] === 'number' && "z-index:" + props['_z'] + ";";
}, function (props) {
    return (props['_t'] || props['_t'] === 0) && typeof props['_t'] === 'number' && "top:" + props['_t'] + "px;";
}, function (props) {
    return (props['_r'] || props['_r'] === 0) && typeof props['_r'] === 'number' && "right:" + props['_r'] + "px;";
}, function (props) {
    return (props['_b'] || props['_b'] === 0) && typeof props['_b'] === 'number' && "bottom:" + props['_b'] + "px;";
}, function (props) {
    return (props['_l'] || props['_l'] === 0) && typeof props['_l'] === 'number' && "left:" + props['_l'] + "px;";
}, function (props) {
    return props['tl'] && typeof props['tl'] === 'boolean' && "text-align:left;";
}, function (props) {
    return props['tc'] && typeof props['tc'] === 'boolean' && "text-align:center;";
}, function (props) {
    return props['tr'] && typeof props['tr'] === 'boolean' && "text-align:right;";
}, function (props) {
    return props['fs'] && typeof props['fs'] === 'number' && "font-size:" + props['fs'] + "px;";
}, function (props) {
    return props['dfs'] && _media_container.media_container.desktop(_templateObject2, "font-size:" + props['dfs'] + "px;");
}, function (props) {
    return props['tfs'] && _media_container.media_container.tablet(_templateObject2, "font-size:" + props['tfs'] + "px;");
}, function (props) {
    return props['pfs'] && _media_container.media_container.phone(_templateObject2, "font-size:" + props['pfs'] + "px;");
}, function (props) {
    return props['mpfs'] && _media_container.media_container.miniPhone(_templateObject2, "font-size:" + props['mpfs'] + "px;");
}, function (props) {
    return props['cp'] && typeof props['cp'] === 'boolean' && "cursor:pointer;";
}, function (props) {
    return props['cd'] && typeof props['cd'] === 'boolean' && "cursor:default;";
}, function (props) {
    return props['bs'] && _typeof(props['bs']) === 'object' && "box-shadow:" + props['bs'][0] + "px " + props['bs'][1] + "px " + props['bs'][2] + "px rgba(0,0,0," + props['bs'][3] + ");";
}, function (props) {
    return props['i'] && (0, _buttonIcon.buttonIcon)();
}, function (props) {
    return props['ch'] && "\n        :hover{transition: all 0.5s;color:" + (0, _getColor.getColor)(props['ch'], props['cho'], true) + ";}\n    ";
}, function (props) {
    return props['bh'] && "\n        :hover{transition: all 0.5s;background:" + (0, _getColor.getColor)(props['bh'], props['bho']) + ";}\n    ";
});