'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * 定义内间距
 * 标准: p,pt,pr,pb,pl
 * 大屏幕: dp,dpt,dpr,dpb,dpl
 * 平板:tp,tpt,tpr,tpb,tpl
 * 手机：pp,ppt,ppr,ppb,ppl
 * */
var padding = exports.padding = function padding(_ref) {
    var p = _ref.p,
        pt = _ref.pt,
        pr = _ref.pr,
        pb = _ref.pb,
        pl = _ref.pl,
        dp = _ref.dp,
        dpt = _ref.dpt,
        dpr = _ref.dpr,
        dpb = _ref.dpb,
        dpl = _ref.dpl,
        tp = _ref.tp,
        tpt = _ref.tpt,
        tpr = _ref.tpr,
        tpb = _ref.tpb,
        tpl = _ref.tpl,
        pp = _ref.pp,
        ppt = _ref.ppt,
        ppr = _ref.ppr,
        ppb = _ref.ppb,
        ppl = _ref.ppl;

    var combination = '';
    if (p || pt || pr || pb || pl || p === 0 || pt === 0 || pr === 0 || pb === 0 || pl === 0) {
        var _padding = '';

        if (p) {
            if (typeof p === 'number' || p === 0) {
                _padding = 'padding:' + p + 'px;';
            }
            if ((typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object' && p && p.length === 4) {
                _padding = 'padding-top:' + p[0] + 'px;padding-right:' + p[1] + 'px;padding-bottom:' + p[2] + 'px;padding-left:' + p[3] + 'px;';
            }
        } else {
            if (typeof pt === 'number' && (pt || pt === 0)) {
                _padding += 'padding-top:' + pt + 'px;';
            }
            if (typeof pr === 'number' && (pr || pr === 0)) {
                _padding += 'padding-right:' + pr + 'px;';
            }
            if (typeof pb === 'number' && (pb || pb === 0)) {
                _padding += 'padding-bottom:' + pb + 'px;';
            }
            if (typeof pl === 'number' && (pl || pl === 0)) {
                _padding += 'padding-left:' + pl + 'px;';
            }
        }
        combination += _padding;
    }

    if (dp || dpt || dpr || dpb || dpl || dp === 0 || dpt === 0 || dpr === 0 || dpb === 0 || dpl === 0) {
        var css = '';
        if (dp) {
            if (typeof dp === 'number' || dp === 0) {
                css = 'padding:' + dp + 'px;';
            }
            if ((typeof dp === 'undefined' ? 'undefined' : _typeof(dp)) === 'object' && dp && dp.length === 4) {
                css = 'padding-top:' + dp[0] + 'px;padding-right:' + dp[1] + 'px;padding-bottom:' + dp[2] + 'px;padding-left:' + dp[3] + 'px;';
            }
        } else {
            if (typeof dpt === 'number' && (dpt || dpt === 0)) {
                css += 'padding-top:' + dpt + 'px;';
            }
            if (typeof dpr === 'number' && (dpr || dpr === 0)) {
                css += 'padding-right:' + dpr + 'px;';
            }
            if (typeof dpb === 'number' && (dpb || dpb === 0)) {
                css += 'padding-bottom:' + dpb + 'px;';
            }
            if (typeof dpl === 'number' && (dpl || dpl === 0)) {
                css += 'padding-left:' + dpl + 'px;';
            }
        }
        combination += '@media (max-width: 1199px){' + css + '}';
    }

    if (tp || tpt || tpr || tpb || tpl || tp === 0 || tpt === 0 || tpr === 0 || tpb === 0 || tpl === 0) {
        var _css = '';
        if (tp) {
            if (typeof tp === 'number' || tp === 0) {
                _css = 'padding:' + tp + 'px;';
            }
            if ((typeof tp === 'undefined' ? 'undefined' : _typeof(tp)) === 'object' && tp && tp.length === 4) {
                _css = 'padding-top:' + tp[0] + 'px;padding-right:' + tp[1] + 'px;padding-bottom:' + tp[2] + 'px;padding-left:' + tp[3] + 'px;';
            }
        } else {
            if (typeof tpt === 'number' && (tpt || tpt === 0)) {
                _css += 'padding-top:' + tpt + 'px;';
            }
            if (typeof tpr === 'number' && (tpr || tpr === 0)) {
                _css += 'padding-right:' + tpr + 'px;';
            }
            if (typeof tpb === 'number' && (tpb || tpb === 0)) {
                _css += 'padding-bottom:' + tpb + 'px;';
            }
            if (typeof tpl === 'number' && (tpl || tpl === 0)) {
                _css += 'padding-left:' + tpl + 'px;';
            }
        }
        combination += '@media (max-width: 991px){' + _css + '}';
    }

    if (pp || ppt || ppr || ppb || ppl || pp === 0 || ppt === 0 || ppr === 0 || ppb === 0 || ppl === 0) {
        var _css2 = '';
        if (pp) {
            if (typeof pp === 'number' || pp === 0) {
                _css2 = 'padding:' + pp + 'px;';
            }
            if ((typeof pp === 'undefined' ? 'undefined' : _typeof(pp)) === 'object' && pp && pp.length === 4) {
                _css2 = 'padding-top:' + pp[0] + 'px;padding-right:' + pp[1] + 'px;padding-bottom:' + pp[2] + 'px;padding-left:' + pp[3] + 'px;';
            }
        } else {
            if (typeof ppt === 'number' && (ppt || ppt === 0)) {
                _css2 += 'padding-top:' + ppt + 'px;';
            }
            if (typeof ppr === 'number' && (ppr || ppr === 0)) {
                _css2 += 'padding-right:' + ppr + 'px;';
            }
            if (typeof ppb === 'number' && (ppb || ppb === 0)) {
                _css2 += 'padding-bottom:' + ppb + 'px;';
            }
            if (typeof ppl === 'number' && (ppl || ppl === 0)) {
                _css2 += 'padding-left:' + ppl + 'px;';
            }
        }
        combination += '@media (max-width: 767px){' + _css2 + '}';
    }
    return combination;
};