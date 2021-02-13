'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 浮动布局
 * position
 * 标准: _pr,_pa,_pf,_pi,_z,_t,_r,_b,_l
 * 大屏幕: _dpr,_dpa,_dpf,_dpi,_dz,_dt,_dr,_db,_dl
 * 平板:_tpr,_tpa,_tpf,_tpi,_tz,_tt,_tr,_tb,_tl
 * 手机：_ppr,_ppa,_ppf,_ppi,_pz,_pt,_pr,_pb,_pl
 * */

var position = exports.position = function position(props) {
    var _dpr = props._dpr,
        _dpa = props._dpa,
        _dpf = props._dpf,
        _dpi = props._dpi,
        _dz = props._dz,
        _dt = props._dt,
        _dr = props._dr,
        _db = props._db,
        _dl = props._dl,
        _tpr = props._tpr,
        _tpa = props._tpa,
        _tpf = props._tpf,
        _tpi = props._tpi,
        _tz = props._tz,
        _tt = props._tt,
        _tr = props._tr,
        _tb = props._tb,
        _tl = props._tl;
    var _ppr = props._ppr,
        _ppa = props._ppa,
        _ppf = props._ppf,
        _ppi = props._ppi,
        _pz = props._pz,
        _pt = props._pt,
        _pb = props._pb,
        _pl = props._pl,
        _pr = props._pr,
        _pa = props._pa,
        _pf = props._pf,
        _pi = props._pi,
        _z = props._z,
        _t = props._t,
        _r = props._r,
        _b = props._b,
        _l = props._l,
        nwp = props.nwp;

    var combination = '';
    if (_dpr || _dpa || _dpf || _dpi) {
        var css = '';
        if (_dpr && typeof _dpr === 'boolean') {
            css = 'position:relative;';
        }
        if (_dpa && typeof _dpa === 'boolean') {
            css = 'position:absolute;';
        }
        if (_dpf && typeof _dpf === 'boolean') {
            css = 'position:fixed;';
        }
        if (_dpi && typeof _dpi === 'boolean') {
            css = 'position:inherit;';
        }
        if (_dz && typeof _dz === 'number' || _dz === 0) {
            css += 'z-index:' + _dz + ';';
        }
        if (_dt && typeof _dt === 'number' || _dt === 0) {
            css += 'top:' + _dt + 'px;';
        }
        if (_dr && typeof _dr === 'number' || _dr === 0) {
            css += 'right:' + _dr + 'px;';
        }
        if (_db && typeof _db === 'number' || _db === 0) {
            css += 'bottom:' + _db + 'px;';
        }
        if (_dl && typeof _dl === 'number' || _dl === 0) {
            css += 'left:' + _dl + 'px;';
        }
        combination += '@media (max-width: 1199px){' + css + '}';
    }
    if (_tpr || _tpa || _tpf || _tpi) {
        var _css = '';
        if (_tpr && typeof _tpr === 'boolean') {
            _css = 'position:relative;';
        }
        if (_tpa && typeof _tpa === 'boolean') {
            _css = 'position:absolute;';
        }
        if (_tpf && typeof _tpf === 'boolean') {
            _css = 'position:fixed;';
        }
        if (_tpi && typeof _tpi === 'boolean') {
            _css = 'position:inherit;';
        }
        if (_tz && typeof _tz === 'number' || _tz === 0) {
            _css += 'z-index:' + _tz + ';';
        }
        if (_tt && typeof _tt === 'number' || _tt === 0) {
            _css += 'top:' + _tt + 'px;';
        }
        if (_tr && typeof _tr === 'number' || _tr === 0) {
            _css += 'right:' + _tr + 'px;';
        }
        if (_tb && typeof _tb === 'number' || _tb === 0) {
            _css += 'bottom:' + _tb + 'px;';
        }
        if (_tl && typeof _tl === 'number' || _tl === 0) {
            _css += 'left:' + _tl + 'px;';
        }
        combination += '@media (max-width: 991px){' + _css + '}';
    }
    if (_ppr || _ppa || _ppf || _ppi) {
        var _css2 = '';
        if (_ppr && typeof _ppr === 'boolean') {
            _css2 = 'position:relative;';
        }
        if (_ppa && typeof _ppa === 'boolean') {
            _css2 = 'position:absolute;';
        }
        if (_ppf && typeof _ppf === 'boolean') {
            _css2 = 'position:fixed;';
        }
        if (_ppi && typeof _ppi === 'boolean') {
            _css2 = 'position:inherit;';
        }
        if (_pz && typeof _pz === 'number' || _pz === 0) {
            _css2 += 'z-index:' + _pz + ';';
        }
        if (_pt && typeof _pt === 'number' || _pt === 0) {
            _css2 += 'top:' + _pt + 'px;';
        }
        if (_pr && typeof _pr === 'number' || _pr === 0) {
            _css2 += 'right:' + _pr + 'px;';
        }
        if (_pb && typeof _pb === 'number' || _pb === 0) {
            _css2 += 'bottom:' + _pb + 'px;';
        }
        if (_pl && typeof _pl === 'number' || _pl === 0) {
            _css2 += 'left:' + _pl + 'px;';
        }
        combination += '@media (max-width: 767px){' + _css2 + '}';
    }
    if (_pr || _pa || _pf || _pi) {
        var _css3 = '';
        if (_pr && typeof _pr === 'boolean') {
            _css3 = 'position:relative;';
        }
        if (_pa && typeof _pa === 'boolean') {
            _css3 = 'position:absolute;' + (nwp ? '' : 'width:100%;');
        }
        if (_pf && typeof _pf === 'boolean') {
            _css3 = 'position:fixed;' + (nwp ? '' : 'width:100%;');
        }
        if (_pi && typeof _pi === 'boolean') {
            _css3 = 'position:inherit;';
        }
        if (_z && typeof _z === 'number' || _z === 0) {
            _css3 += 'z-index:' + _z + ';';
        }
        if (_t && typeof _t === 'number' || _t === 0) {
            _css3 += 'top:' + _t + 'px;';
        }
        if (_r && typeof _r === 'number' || _r === 0) {
            _css3 += 'right:' + _r + 'px;';
        }
        if (_b && typeof _b === 'number' || _b === 0) {
            _css3 += 'bottom:' + _b + 'px;';
        }
        if (_l && typeof _l === 'number' || _l === 0) {
            _css3 += 'left:' + _l + 'px;';
        }
        combination += _css3;
    }
    return combination;
};