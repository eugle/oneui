/*
 * 定义外间距
 * 标准: m,mt,mr,mb,ml,
 * 大屏幕: m,dmt,dmr,dmb,dml,
 * 平板:tm,tmt,tmr,tmb,tml,
 * 手机：pm,pmt,pmr,pmb,pml
 * */
export const margin = (props) => {
    const {m, mt, mr, mb, ml, dm, dmt, dmr, dmb, dml, tm, tmt, tmr, tmb, tml, pm, pmt, pmr, pmb, pml} = props;
    const mx = {t: 'top', r: 'right', b: 'bottom', l: 'left'};
    let combination = '';
    if (dm || dmt || dmr || dmb || dml || dm === 0 || dmt === 0 || dmr === 0 || dmb === 0 || dml === 0) {
        let css = '';
        if (dm) {
            if (dm || dm === 0) {
                css = `margin:${dm}px;`;
            }
            if (dm.length === 4) {
                Object.values(mx).forEach((item,index) => css += `margin-${item}:${dm[index]}px;`)
            }
        } else {
            if (dmt || dmt === 0) {
                css += `margin-top:${dmt}px;`;
            }
            if (dmr || dmr === 0) {
                css += `margin-right:${dmr}px;`;
            }
            if (dmb || dmb === 0) {
                css += `margin-bottom:${dmb}px;`;
            }
            if (dml || dml === 0) {
                css += `margin-left:${dml}px;`;
            }
        }
        combination += `@media (max-width: 1199px){${css}}`;
    }

    if (tm || tmt || tmr || tmb || tml || tm === 0 || tmt === 0 || tmr === 0 || tmb === 0 || tml === 0) {
        let css = '';
        if (tm) {
            if (typeof tm === 'number' || tm === 0) {
                css = `margin:${tm}px;`;
            }
            if (typeof tm === 'object' && tm && tm.length === 4) {
                css = `margin-top:${tm[0]}px;margin-right:${tm[1]}px;margin-bottom:${tm[2]}px;margin-left:${tm[3]}px;`;
            }
        } else {
            if (typeof tmt === 'number' && (tmt || tmt === 0)) {
                css += `margin-top:${tmt}px;`;
            }
            if (typeof tmr === 'number' && (tmr || tmr === 0)) {
                css += `margin-right:${tmr}px;`;
            }
            if (typeof tmb === 'number' && (tmb || tmb === 0)) {
                css += `margin-bottom:${tmb}px;`;
            }
            if (typeof tml === 'number' && (tml || tml === 0)) {
                css += `margin-left:${tml}px;`;
            }
        }
        combination += `@media (max-width:991px){${css}}`;
    }
    if (pm || pmt || pmr || pmb || pml || pm === 0 || pmt === 0 || pmr === 0 || pmb === 0 || pml === 0) {
        let css = '';
        if (pm) {
            if (typeof pm === 'number' || pm === 0) {
                css = `margin:${pm}px;`;
            }
            if (typeof pm === 'object' && pm && pm.length === 4) {
                css = `margin-top:${pm[0]}px;margin-right:${pm[1]}px;margin-bottom:${pm[2]}px;margin-left:${pm[3]}px;`;
            }
        } else {
            if (typeof pmt === 'number' && (pmt || pmt === 0)) {
                css += `margin-top:${pmt}px;`;
            }
            if (typeof pmr === 'number' && (pmr || pmr === 0)) {
                css += `margin-right:${pmr}px;`;
            }
            if (typeof pmb === 'number' && (pmb || pmb === 0)) {
                css += `margin-bottom:${pmb}px;`;
            }
            if (typeof pml === 'number' && (pml || pml === 0)) {
                css += `margin-left:${pml}px;`;
            }
        }
        combination += `@media (max-width:767px){${css}}`;
    }
    if (m || mt || mr || mb || ml || m === 0 || mt === 0 || mr === 0 || mb === 0 || ml === 0) {
        let margin = '';
        if (m) {
            if (typeof m === 'number' || m === 0) {
                margin = `margin:${m}px;`;
            }
            if (typeof m === 'object' && m && m.length === 4) {
                margin = `margin-top:${m[0]}px;margin-right:${m[1]}px;margin-bottom:${m[2]}px;margin-left:${m[3]}px;`;
            }
        } else {
            if (typeof mt === 'number' && (mt || mt === 0)) {
                margin += `margin-top:${mt}px;`;
            }
            if (typeof mr === 'number' && (mr || mr === 0)) {
                margin += `margin-right:${mr}px;`;
            }
            if (typeof mb === 'number' && (mb || mb === 0)) {
                margin += `margin-bottom:${mb}px;`;
            }
            if (typeof ml === 'number' && (ml || ml === 0)) {
                margin += `margin-left:${ml}px;`;
            }
        }
        combination += margin;
    }
    return combination;
};
