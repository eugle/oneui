"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ul = undefined;

var _templateObject = _taggedTemplateLiteral(["", " ", " ", " ", ""], ["", " ", " ", " ", ""]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _padding = require("./box/padding");

var _margin = require("./box/margin");

var _media = require("./media/media");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Ul = exports.Ul = _styledComponents2.default.ul(_templateObject, function (props) {
  return text(props);
}, function (props) {
  return (0, _padding.padding)(props);
}, function (props) {
  return (0, _margin.margin)(props);
}, function (props) {
  return (0, _media.media)(props);
});