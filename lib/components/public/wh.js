'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['', ':', 'px;'], ['', ':', 'px;']),
    _templateObject2 = _taggedTemplateLiteral(['', ':', '%;'], ['', ':', '%;']);

var _media_container = require('../media/media_container');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (props) {
    var arr = ['w', 'h'];
    var tag = { w: 'width', h: 'height' };
    var scr = { d: 'desktop', t: 'tablet', p: 'phone' };
    arr.forEach(function (item) {
        return arr.push(item + 'p');
    });
    arr.forEach(function (item) {
        return Object.keys(scr).forEach(function (child) {
            return arr.push(child + item);
        });
    });
    var css = '';
    Object.keys(props).forEach(function (item) {
        if (arr.includes(item)) {
            if (typeof props[item] === "number") {
                if (item.length === 1 || arr.slice(0, 4).includes(item)) {
                    css += [tag[[].concat(_toConsumableArray(item)).shift()]] + ':' + props[item] + (item.length === 1 ? 'px' : '%') + ';';
                }
                if (item.length === 2 && !arr.slice(0, 4).includes(item)) {
                    console.log(scr[[].concat(_toConsumableArray(item)).shift()]);
                    console.log(tag[[].concat(_toConsumableArray(item)).pop()]);
                    console.log(props[item]);
                    css += _media_container.media_container[scr[[].concat(_toConsumableArray(item)).shift()]](_templateObject, [tag[[].concat(_toConsumableArray(item)).pop()]], props[item]);
                }
                if (item.length === 3) {
                    console.log(scr[[].concat(_toConsumableArray(item)).shift()]);
                    console.log(tag[[].concat(_toConsumableArray(item))[1]]);
                    console.log(props[item]);
                    css += _media_container.media_container[scr[[].concat(_toConsumableArray(item)).shift()]](_templateObject2, [tag[[].concat(_toConsumableArray(item))[1]]], props[item]);
                    console.log(css);
                }
            }
        }
    });
    console.log(css);
    return css;
};