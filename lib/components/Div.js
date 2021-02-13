'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Div = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n        \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', ' \n    ', '   \n    ', ' \n    ', ' \n    box-sizing:border-box;\n'], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n        \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', ' \n    ', '   \n    ', ' \n    ', ' \n    box-sizing:border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media_container = require('./media/media_container');

var _media = require('./media/media');

var _getColor = require('./internal/getColor');

var _setBackground = require('./internal/setBackground');

var _flexDirection = require('./flex/flexDirection');

var _flexWrap = require('./flex/flexWrap');

var _justifyContent = require('./flex/justifyContent');

var _alignItems = require('./flex/alignItems');

var _alignContent = require('./flex/alignContent');

var _alignSelf = require('./flex/alignSelf');

var _border = require('./box/border');

var _padding = require('./box/padding');

var _margin = require('./box/margin');

var _rounded = require('./advance/rounded');

var _column = require('./float/column');

var _opacity = require('./basic/opacity');

var _position = require('./position');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * 改造div
                                                                                                                                                   * 布局属性 flex-direction,flex-wrap,justify-content,align-items,align-content,align-self,order
                                                                                                                                                   * 常规属性 width,height,color,font-size,line-height,background,border|border-x,margin,padding,l,b
                                                                                                                                                   * 定位属性 position,z-index,top,right,bottom,left, pa|pf 默认有 100%, nwp 可去除
                                                                                                                                                   * 内容对齐 text-align
                                                                                                                                                   * 超出隐藏 oh,
                                                                                                                                                   * 鼠标指针 cp: 手形,cc:十字,
                                                                                                                                                   * 最大最小宽高 xw,nw,xwp,nwp,xh,nh,xhp,nhp
                                                                                                                                                   * 整体透明 o
                                                                                                                                                   * 旋转 tr
                                                                                                                                                   * */

var Div = exports.Div = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _border.border)(props);
}, function (props) {
  return (0, _rounded.rounded)(props);
}, function (props) {
  return (0, _padding.padding)(props);
}, function (props) {
  return (0, _margin.margin)(props);
}, function (props) {
  return (0, _media.media)(props);
}, function (props) {
  return (0, _opacity.opacity)(props);
}, function (props) {
  return (0, _position.position)(props);
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
  return props['f'] && typeof props['f'] === 'number' && 'flex:' + props['f'] + ';';
}, function (props) {
  return props['df'] && _media_container.media_container.desktop(_templateObject2, (0, _flexDirection.flexDirection)(props['df']));
}, function (props) {
  return props['tf'] && _media_container.media_container.tablet(_templateObject2, (0, _flexDirection.flexDirection)(props['tf']));
}, function (props) {
  return props['pf'] && _media_container.media_container.phone(_templateObject2, (0, _flexDirection.flexDirection)(props['pf']));
}, function (props) {
  return props['_o'] && typeof props['_o'] === 'number' && 'order:' + props['_o'] + ';';
}, function (props) {
  return props['_do'] && _media_container.media_container.desktop(_templateObject2, 'order:' + props['_do'] + ';');
}, function (props) {
  return props['_to'] && _media_container.media_container.tablet(_templateObject2, 'order:' + props['_to'] + ';');
}, function (props) {
  return props['_po'] && _media_container.media_container.phone(_templateObject2, 'order:' + props['_po'] + ';');
}, function (props) {
  return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
  return props['dw'] && _media_container.media_container.desktop(_templateObject2, 'width:' + props['dw'] + 'px;');
}, function (props) {
  return props['tw'] && _media_container.media_container.tablet(_templateObject2, 'width:' + props['tw'] + 'px;');
}, function (props) {
  return props['pw'] && _media_container.media_container.phone(_templateObject2, 'width:' + props['pw'] + 'px;');
}, function (props) {
  return props['wp'] && typeof props['wp'] === 'number' && 'width:' + props['wp'] + '%;';
}, function (props) {
  return props['dwp'] && _media_container.media_container.desktop(_templateObject2, 'width:' + props['dwp'] + '%;');
}, function (props) {
  return props['twp'] && _media_container.media_container.tablet(_templateObject2, 'width:' + props['twp'] + '%;');
}, function (props) {
  return props['pwp'] && _media_container.media_container.phone(_templateObject2, 'width:' + props['pwp'] + '%;');
}, function (props) {
  return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
  return props['dh'] && _media_container.media_container.desktop(_templateObject2, 'height:' + props['dh'] + 'px;');
}, function (props) {
  return props['th'] && _media_container.media_container.tablet(_templateObject2, 'height:' + props['th'] + 'px;');
}, function (props) {
  return props['ph'] && _media_container.media_container.phone(_templateObject2, 'height:' + props['ph'] + 'px;');
}, function (props) {
  return props['hp'] && typeof props['hp'] === 'number' && 'height:' + props['hp'] + '%;';
}, function (props) {
  return props['dhp'] && _media_container.media_container.desktop(_templateObject2, 'height:' + props['dhp'] + '%;');
}, function (props) {
  return props['thp'] && _media_container.media_container.tablet(_templateObject2, 'height:' + props['thp'] + '%;');
}, function (props) {
  return props['php'] && _media_container.media_container.phone(_templateObject2, 'height:' + props['php'] + '%;');
}, function (props) {
  return props['c'] && 'color:' + (0, _getColor.getColor)(props['c'], props['o']) + ';';
}, function (props) {
  return props['fs'] && typeof props['fs'] === 'number' && 'font-size:' + props['fs'] + 'px;';
}, function (props) {
  return props['dfs'] && _media_container.media_container.desktop(_templateObject2, 'font-size:' + props['dfs'] + 'px;');
}, function (props) {
  return props['tfs'] && _media_container.media_container.tablet(_templateObject2, 'font-size:' + props['tfs'] + 'px;');
}, function (props) {
  return props['pfs'] && _media_container.media_container.phone(_templateObject2, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
  return props['mpfs'] && _media_container.media_container.miniPhone(_templateObject2, 'font-size:' + props['mpfs'] + 'px;');
}, function (props) {
  return props['lh'] && typeof props['lh'] === 'number' && 'line-height:' + props['lh'] + 'px;';
}, function (props) {
  return props['dlh'] && _media_container.media_container.desktop(_templateObject2, 'line-height:' + props['dlh'] + 'px;');
}, function (props) {
  return props['tlh'] && _media_container.media_container.tablet(_templateObject2, 'line-height:' + props['tlh'] + 'px;');
}, function (props) {
  return props['plh'] && _media_container.media_container.phone(_templateObject2, 'line-height:' + props['plh'] + 'px;');
}, function (props) {
  return props['l'] && typeof props['l'] === 'boolean' && 'font-weight:300;';
}, function (props) {
  return props['b'] && typeof props['b'] === 'boolean' && 'font-weight:600;';
}, function (props) {
  return props['bg'] && typeof props['bg'] === 'string' && (props['g'] ? (0, _setBackground.setBackground)(props['bg'], props['g']) : 'background:' + (0, _getColor.getColor)(props['bg'], props['bgo']) + ';');
}, function (props) {
  return props['dbg'] && _media_container.media_container.desktop(_templateObject2, props['g'] ? (0, _setBackground.setBackground)(props['dbg'], props['g']) : 'background:' + (0, _getColor.getColor)(props['dbg'], props['dbgo']) + ';');
}, function (props) {
  return props['tbg'] && _media_container.media_container.tablet(_templateObject2, props['g'] ? (0, _setBackground.setBackground)(props['tbg'], props['g']) : 'background:' + (0, _getColor.getColor)(props['tbg'], props['tbgo']) + ';');
}, function (props) {
  return props['pbg'] && _media_container.media_container.phone(_templateObject2, props['g'] ? (0, _setBackground.setBackground)(props['pbg'], props['g']) : 'background:' + (0, _getColor.getColor)(props['pbg'], props['pbgo']) + ';');
}, function (props) {
  return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
  return props['col'] && (0, _column.column)(props);
}, function (props) {
  return props['dcol'] && _media_container.media_container.desktop(_templateObject2, (0, _column.column)(props['dcol']));
}, function (props) {
  return props['tcol'] && _media_container.media_container.tablet(_templateObject2, (0, _column.column)(props['tcol']));
}, function (props) {
  return props['pcol'] && _media_container.media_container.phone(_templateObject2, (0, _column.column)(props['pcol']));
}, function (props) {
  return props['tl'] && typeof props['tl'] === 'boolean' && 'text-align:left;';
}, function (props) {
  return props['tc'] && typeof props['tc'] === 'boolean' && 'text-align:center;';
}, function (props) {
  return props['tr'] && typeof props['tr'] === 'boolean' && 'text-align:right;';
}, function (props) {
  return props['oh'] && typeof props['oh'] === 'boolean' && 'overflow:hidden;';
}, function (props) {
  return props['oa'] && typeof props['oa'] === 'boolean' && 'overflow:auto;';
}, function (props) {
  return props['oy'] && typeof props['oy'] === 'boolean' && 'overflow-x:auto;overflow-y:hidden;';
}, function (props) {
  return props['ox'] && typeof props['ox'] === 'boolean' && 'overflow-y:auto;overflow-x:hidden;';
}, function (props) {
  return props['cp'] && typeof props['cp'] === 'boolean' && 'cursor:pointer;';
}, function (props) {
  return props['cc'] && typeof props['cc'] === 'boolean' && 'cursor:crosshair;';
}, function (props) {
  return props['xw'] && typeof props['xw'] === 'number' && 'max-width:' + props['xw'] + 'px;';
}, function (props) {
  return props['nw'] && typeof props['nw'] === 'number' && 'min-width:' + props['nw'] + 'px;';
}, function (props) {
  return props['xwp'] && typeof props['xwp'] === 'number' && 'max-width:' + props['xwp'] + '%;';
}, function (props) {
  return props['nwp'] && typeof props['nwp'] === 'number' && 'min-width:' + props['nwp'] + '%;';
}, function (props) {
  return props['xh'] && typeof props['xh'] === 'number' && 'max-height:' + props['xh'] + 'px;';
}, function (props) {
  return props['nh'] && typeof props['nh'] === 'number' && 'min-height:' + props['nh'] + 'px;';
}, function (props) {
  return props['xhp'] && typeof props['xhp'] === 'number' && 'max-height:' + props['xhp'] + '%;';
}, function (props) {
  return props['nhp'] && typeof props['nhp'] === 'number' && 'min-height:' + props['nhp'] + '%;';
}, function (props) {
  return props['ns'] && typeof props['ns'] === 'boolean' && 'user-select: none;';
}, function (props) {
  return props['bs'] && _typeof(props['bs']) === 'object' && 'box-shadow:' + props['bs'][0] + 'px ' + props['bs'][1] + 'px ' + props['bs'][2] + 'px rgba(0,0,0,' + props['bs'][3] + ');';
}, function (props) {
  return props['tr'] && typeof props['tr'] === 'number' && 'transform:rotate(' + props['tr'] + 'deg);';
}, function (props) {
  return (props['ch'] || props['cho']) && '\n        :hover{color:' + (0, _getColor.getColor)(props['ch'] || props['c'], props['cho'], true) + ';transition: all 0.5s;}\n    ';
}, function (props) {
  return (props['bh'] || props['bho']) && '\n        :hover{background:' + (0, _getColor.getColor)(props['bh'] || props['bg'], props['bho']) + ';transition: all 0.5s;}\n    ';
});