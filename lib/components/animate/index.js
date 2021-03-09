'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animate = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  from {transform: rotate(0deg);}\n  to {transform: rotate(360deg);}\n'], ['\n  from {transform: rotate(0deg);}\n  to {transform: rotate(360deg);}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   0% { margin-top: ', 'px;opacity:0;}\n   100% { margin-top: 0px;opacity:1;}\n'], ['\n   0% { margin-top: ', 'px;opacity:0;}\n   100% { margin-top: 0px;opacity:1;}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n   0% { margin-top: -', 'px;opacity:0;}\n   100% { margin-top: 0px;opacity:1;}\n'], ['\n   0% { margin-top: -', 'px;opacity:0;}\n   100% { margin-top: 0px;opacity:1;}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n   0% { margin-left: ', 'px;opacity:0;}\n   100% { margin-left: 0px;opacity:1;}\n'], ['\n   0% { margin-left: ', 'px;opacity:0;}\n   100% { margin-left: 0px;opacity:1;}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n   0% { margin-right: ', 'px;opacity:0;}\n   100% { margin-right: 0px;opacity:1;}\n'], ['\n   0% { margin-right: ', 'px;opacity:0;}\n   100% { margin-right: 0px;opacity:1;}\n']),
    _templateObject6 = _taggedTemplateLiteral(['animation: ', ' ', 's linear ', ';'], ['animation: ', ' ', 's linear ', ';']),
    _templateObject7 = _taggedTemplateLiteral(['animation: ', ' ', 's linear;'], ['animation: ', ' ', 's linear;']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styledComponents.keyframes)(_templateObject);

var position = 50;
var fadeBottom = (0, _styledComponents.keyframes)(_templateObject2, position);

var fadeTop = (0, _styledComponents.keyframes)(_templateObject3, position);

var fadeRight = (0, _styledComponents.keyframes)(_templateObject4, position);

var fadeLeft = (0, _styledComponents.keyframes)(_templateObject5, position);

var animate = exports.animate = function animate(_ref) {
    var a = _ref.a;

    if (a && a instanceof Array) {
        var _ref2 = a || [],
            _ref3 = _slicedToArray(_ref2, 3),
            name = _ref3[0],
            time = _ref3[1],
            infinite = _ref3[2];

        if (typeof name === 'string' && typeof time === "number") {
            var current = '';
            if (name === "r") {
                var limit = infinite && typeof infinite === "number" ? infinite : 'infinite';
                current = (0, _styledComponents.css)(_templateObject6, rotate, time, limit);
            }
            if (name === "fb") {
                current = (0, _styledComponents.css)(_templateObject7, fadeBottom, time);
            }
            if (name === "ft") {
                current = (0, _styledComponents.css)(_templateObject7, fadeTop, time);
            }
            if (name === "fl") {
                current = (0, _styledComponents.css)(_templateObject7, fadeLeft, time);
            }
            if (name === "fr") {
                current = (0, _styledComponents.css)(_templateObject7, fadeRight, time);
            }
            return current;
        }
    }
};