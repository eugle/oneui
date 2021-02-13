"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Span = undefined;

var _templateObject = _taggedTemplateLiteral(["", " ", " ", " ", " ", ""], ["", " ", " ", " ", " ", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _padding = require("./box/padding");

var _margin = require("./box/margin");

var _media = require("./media/media");

var _opacity = require("./basic/opacity");

var _text = require("./internal/text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Span = exports.Span = _styledComponents2.default.span(_templateObject, function (props) {
    return (0, _text.text)(props);
}, function (props) {
    return (0, _padding.padding)(props);
}, function (props) {
    return (0, _margin.margin)(props);
}, function (props) {
    return (0, _media.media)(props);
}, function (props) {
    return (0, _opacity.opacity)(props);
});