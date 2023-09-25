/**
 * 浮动布局
 * position
 * 标准: _pr,_pa,_pf,_pi,_z,_t,_r,_b,_l
 * 大屏幕: _dpr,_dpa,_dpf,_dpi,_dz,_dt,_dr,_db,_dl
 * 平板:_tpr,_tpa,_tpf,_tpi,_tz,_tt,_tr,_tb,_tl
 * 手机：_ppr,_ppa,_ppf,_ppi,_pz,_pt,_pr,_pb,_pl
 * */

export const position = (props: any) => {
    const { _dpr, _dpa, _dpf, _dpi, _dz, _dt, _dr, _db, _dl, _tpr, _tpa, _tpf, _tpi, _tz, _tt, _tr, _tb, _tl } = props;
    const { _ppr, _ppa, _ppf, _ppi, _pz, _pt, _pb, _pl, _pr, _pa, _pf, _pi, _z, _t, _r, _b, _l, nwp } = props;
    let combination = '';
    if (_dpr || _dpa || _dpf || _dpi) {
        let css = '';
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
        if ((_dz && typeof _dz === 'number') || _dz === 0) {
            css += `z-index:${_dz};`;
        }
        if ((_dt && typeof _dt === 'number') || _dt === 0) {
            css += `top:${_dt}px;`;
        }
        if ((_dr && typeof _dr === 'number') || _dr === 0) {
            css += `right:${_dr}px;`;
        }
        if ((_db && typeof _db === 'number') || _db === 0) {
            css += `bottom:${_db}px;`;
        }
        if ((_dl && typeof _dl === 'number') || _dl === 0) {
            css += `left:${_dl}px;`;
        }
        combination += `@media (max-width: 1199px){${css}}`;
    }
    if (_tpr || _tpa || _tpf || _tpi) {
        let css = '';
        if (_tpr && typeof _tpr === 'boolean') {
            css = 'position:relative;';
        }
        if (_tpa && typeof _tpa === 'boolean') {
            css = 'position:absolute;';
        }
        if (_tpf && typeof _tpf === 'boolean') {
            css = 'position:fixed;';
        }
        if (_tpi && typeof _tpi === 'boolean') {
            css = 'position:inherit;';
        }
        if ((_tz && typeof _tz === 'number') || _tz === 0) {
            css += `z-index:${_tz};`;
        }
        if ((_tt && typeof _tt === 'number') || _tt === 0) {
            css += `top:${_tt}px;`;
        }
        if ((_tr && typeof _tr === 'number') || _tr === 0) {
            css += `right:${_tr}px;`;
        }
        if ((_tb && typeof _tb === 'number') || _tb === 0) {
            css += `bottom:${_tb}px;`;
        }
        if ((_tl && typeof _tl === 'number') || _tl === 0) {
            css += `left:${_tl}px;`;
        }
        combination += `@media (max-width: 991px){${css}}`;
    }
    if (_ppr || _ppa || _ppf || _ppi) {
        let css = '';
        if (_ppr && typeof _ppr === 'boolean') {
            css = 'position:relative;';
        }
        if (_ppa && typeof _ppa === 'boolean') {
            css = 'position:absolute;';
        }
        if (_ppf && typeof _ppf === 'boolean') {
            css = 'position:fixed;';
        }
        if (_ppi && typeof _ppi === 'boolean') {
            css = 'position:inherit;';
        }
        if ((_pz && typeof _pz === 'number') || _pz === 0) {
            css += `z-index:${_pz};`;
        }
        if ((_pt && typeof _pt === 'number') || _pt === 0) {
            css += `top:${_pt}px;`;
        }
        if ((_pr && typeof _pr === 'number') || _pr === 0) {
            css += `right:${_pr}px;`;
        }
        if ((_pb && typeof _pb === 'number') || _pb === 0) {
            css += `bottom:${_pb}px;`;
        }
        if ((_pl && typeof _pl === 'number') || _pl === 0) {
            css += `left:${_pl}px;`;
        }
        combination += `@media (max-width: 767px){${css}}`;
    }
    if (_pr || _pa || _pf || _pi) {
        let css = '';
        if (_pr && typeof _pr === 'boolean') {
            css = 'position:relative;';
        }
        if (_pa && typeof _pa === 'boolean') {
            css = `position:absolute;${nwp ? '' : `width:100%;`}`;
        }
        if (_pf && typeof _pf === 'boolean') {
            css = `position:fixed;${nwp ? '' : `width:100%;`}`;
        }
        if (_pi && typeof _pi === 'boolean') {
            css = 'position:inherit;';
        }
        if ((_z && typeof _z === 'number') || _z === 0) {
            css += `z-index:${_z};`;
        }
        if ((_t && typeof _t === 'number') || _t === 0) {
            css += `top:${_t}px;`;
        }
        if ((_r && typeof _r === 'number') || _r === 0) {
            css += `right:${_r}px;`;
        }
        if ((_b && typeof _b === 'number') || _b === 0) {
            css += `bottom:${_b}px;`;
        }
        if ((_l && typeof _l === 'number') || _l === 0) {
            css += `left:${_l}px;`;
        }
        combination += css;
    }
    return combination;
};
