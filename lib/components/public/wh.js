'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _media_container = require('../media/media_container');

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
                if (item.length >= 2 && !arr.slice(0, 4).includes(item)) {
                    css += '@media (max-width: ' + _media_container.sizes[scr[[].concat(_toConsumableArray(item)).shift()]] + 'px){\n                        ' + tag[[].concat(_toConsumableArray(item))[1]] + ':' + props[item] + (item.length === 2 ? 'px' : '%') + ';\n                    }';
                }
            }
        }
    });
    return css;
};