"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media_container = exports.sizes = undefined;

var _templateObject = _taggedTemplateLiteral(["\n\t\t@media (max-width: ", "px) {\n\t\t\t", "\n\t\t}\n\t"], ["\n\t\t@media (max-width: ", "px) {\n\t\t\t", "\n\t\t}\n\t"]);

var _styledComponents = require("styled-components");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 媒体查询
                                                                                                                                                   * 分辨率: 0 ~ 767 手机 | 768 ~ 991 平板 | 992 ~ 1199 小屏幕电脑 | 1200 ~ * 大屏幕电脑
                                                                                                                                                   * 名称: phone 手机 | tablet 平板 | desktop 小屏幕电脑
                                                                                                                                                   * */


var sizes = exports.sizes = { desktop: 1199, tablet: 991, phone: 767, miniPhone: 374 };
var media_container = exports.media_container = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject, sizes[label], _styledComponents.css.apply(undefined, arguments));
  };
  return acc;
}, {});