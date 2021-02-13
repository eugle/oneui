'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * 定义外间距
 * 标准: m,mt,mr,mb,ml,
 * 大屏幕: m,dmt,dmr,dmb,dml,
 * 平板:tm,tmt,tmr,tmb,tml,
 * 手机：pm,pmt,pmr,pmb,pml
 * */
var margin = exports.margin = function margin(_ref) {
    var m = _ref.m,
        mt = _ref.mt,
        mr = _ref.mr,
        mb = _ref.mb,
        ml = _ref.ml,
        dm = _ref.dm,
        dmt = _ref.dmt,
        dmr = _ref.dmr,
        dmb = _ref.dmb,
        dml = _ref.dml,
        tm = _ref.tm,
        tmt = _ref.tmt,
        tmr = _ref.tmr,
        tmb = _ref.tmb,
        tml = _ref.tml,
        pm = _ref.pm,
        pmt = _ref.pmt,
        pmr = _ref.pmr,
        pmb = _ref.pmb,
        pml = _ref.pml;

    var combination = '';
    if (dm || dmt || dmr || dmb || dml || dm === 0 || dmt === 0 || dmr === 0 || dmb === 0 || dml === 0) {
        var css = '';
        if (dm) {
            if (typeof dm === 'number' || dm === 0) {
                css = 'margin:' + dm + 'px;';
            }
            if ((typeof dm === 'undefined' ? 'undefined' : _typeof(dm)) === 'object' && dm && dm.length === 4) {
                css = 'margin-top:' + dm[0] + 'px;margin-right:' + dm[1] + 'px;margin-bottom:' + dm[2] + 'px;margin-left:' + dm[3] + 'px;';
            }
        } else {
            if (typeof dmt === 'number' && (dmt || dmt === 0)) {
                css += 'margin-top:' + dmt + 'px;';
            }
            if (typeof dmr === 'number' && (dmr || dmr === 0)) {
                css += 'margin-right:' + dmr + 'px;';
            }
            if (typeof dmb === 'number' && (dmb || dmb === 0)) {
                css += 'margin-bottom:' + dmb + 'px;';
            }
            if (typeof dml === 'number' && (dml || dml === 0)) {
                css += 'margin-left:' + dml + 'px;';
            }
        }
        combination += '@media (max-width: 1199px){' + css + '}';
    }
    if (tm || tmt || tmr || tmb || tml || tm === 0 || tmt === 0 || tmr === 0 || tmb === 0 || tml === 0) {
        var _css = '';
        if (tm) {
            if (typeof tm === 'number' || tm === 0) {
                _css = 'margin:' + tm + 'px;';
            }
            if ((typeof tm === 'undefined' ? 'undefined' : _typeof(tm)) === 'object' && tm && tm.length === 4) {
                _css = 'margin-top:' + tm[0] + 'px;margin-right:' + tm[1] + 'px;margin-bottom:' + tm[2] + 'px;margin-left:' + tm[3] + 'px;';
            }
        } else {
            if (typeof tmt === 'number' && (tmt || tmt === 0)) {
                _css += 'margin-top:' + tmt + 'px;';
            }
            if (typeof tmr === 'number' && (tmr || tmr === 0)) {
                _css += 'margin-right:' + tmr + 'px;';
            }
            if (typeof tmb === 'number' && (tmb || tmb === 0)) {
                _css += 'margin-bottom:' + tmb + 'px;';
            }
            if (typeof tml === 'number' && (tml || tml === 0)) {
                _css += 'margin-left:' + tml + 'px;';
            }
        }
        combination += '@media (max-width:991px){' + _css + '}';
    }
    if (pm || pmt || pmr || pmb || pml || pm === 0 || pmt === 0 || pmr === 0 || pmb === 0 || pml === 0) {
        var _css2 = '';
        if (pm) {
            if (typeof pm === 'number' || pm === 0) {
                _css2 = 'margin:' + pm + 'px;';
            }
            if ((typeof pm === 'undefined' ? 'undefined' : _typeof(pm)) === 'object' && pm && pm.length === 4) {
                _css2 = 'margin-top:' + pm[0] + 'px;margin-right:' + pm[1] + 'px;margin-bottom:' + pm[2] + 'px;margin-left:' + pm[3] + 'px;';
            }
        } else {
            if (typeof pmt === 'number' && (pmt || pmt === 0)) {
                _css2 += 'margin-top:' + pmt + 'px;';
            }
            if (typeof pmr === 'number' && (pmr || pmr === 0)) {
                _css2 += 'margin-right:' + pmr + 'px;';
            }
            if (typeof pmb === 'number' && (pmb || pmb === 0)) {
                _css2 += 'margin-bottom:' + pmb + 'px;';
            }
            if (typeof pml === 'number' && (pml || pml === 0)) {
                _css2 += 'margin-left:' + pml + 'px;';
            }
        }
        combination += '@media (max-width:767px){' + _css2 + '}';
    }
    if (m || mt || mr || mb || ml || m === 0 || mt === 0 || mr === 0 || mb === 0 || ml === 0) {
        var _margin = '';
        if (m) {
            if (typeof m === 'number' || m === 0) {
                _margin = 'margin:' + m + 'px;';
            }
            if ((typeof m === 'undefined' ? 'undefined' : _typeof(m)) === 'object' && m && m.length === 4) {
                _margin = 'margin-top:' + m[0] + 'px;margin-right:' + m[1] + 'px;margin-bottom:' + m[2] + 'px;margin-left:' + m[3] + 'px;';
            }
        } else {
            if (typeof mt === 'number' && (mt || mt === 0)) {
                _margin += 'margin-top:' + mt + 'px;';
            }
            if (typeof mr === 'number' && (mr || mr === 0)) {
                _margin += 'margin-right:' + mr + 'px;';
            }
            if (typeof mb === 'number' && (mb || mb === 0)) {
                _margin += 'margin-bottom:' + mb + 'px;';
            }
            if (typeof ml === 'number' && (ml || ml === 0)) {
                _margin += 'margin-left:' + ml + 'px;';
            }
        }
        combination += _margin;
    }
    return combination;
};