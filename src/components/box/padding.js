/*
 * 定义内间距
 * 标准: p,pt,pr,pb,pl
 * 大屏幕: dp,dpt,dpr,dpb,dpl
 * 平板:tp,tpt,tpr,tpb,tpl
 * 手机：pp,ppt,ppr,ppb,ppl
 * */
export const padding = ({p, pt, pr, pb, pl, dp, dpt, dpr, dpb, dpl, tp, tpt, tpr, tpb, tpl, pp, ppt, ppr, ppb, ppl}) => {
    let combination = '';
    if (p || pt || pr || pb || pl || p === 0 || pt === 0 || pr === 0 || pb === 0 || pl === 0) {
        let padding = '';

        if (p) {
            if (typeof p === 'number' || p === 0) {
                padding = `padding:${p}px;`;
            }
            if (typeof p === 'object' && p && p.length === 4) {
                padding = `padding-top:${p[0]}px;padding-right:${p[1]}px;padding-bottom:${p[2]}px;padding-left:${p[3]}px;`;
            }
        } else {
            if (typeof pt === 'number' && (pt || pt === 0)) {
                padding += `padding-top:${pt}px;`;
            }
            if (typeof pr === 'number' && (pr || pr === 0)) {
                padding += `padding-right:${pr}px;`;
            }
            if (typeof pb === 'number' && (pb || pb === 0)) {
                padding += `padding-bottom:${pb}px;`;
            }
            if (typeof pl === 'number' && (pl || pl === 0)) {
                padding += `padding-left:${pl}px;`;
            }
        }
        combination += padding;
    }

    if (dp || dpt || dpr || dpb || dpl || dp === 0 || dpt === 0 || dpr === 0 || dpb === 0 || dpl === 0) {
        let css = '';
        if (dp) {
            if (typeof dp === 'number' || dp === 0) {
                css = `padding:${dp}px;`;
            }
            if (typeof dp === 'object' && dp && dp.length === 4) {
                css = `padding-top:${dp[0]}px;padding-right:${dp[1]}px;padding-bottom:${dp[2]}px;padding-left:${dp[3]}px;`;
            }
        } else {
            if (typeof dpt === 'number' && (dpt || dpt === 0)) {
                css += `padding-top:${dpt}px;`;
            }
            if (typeof dpr === 'number' && (dpr || dpr === 0)) {
                css += `padding-right:${dpr}px;`;
            }
            if (typeof dpb === 'number' && (dpb || dpb === 0)) {
                css += `padding-bottom:${dpb}px;`;
            }
            if (typeof dpl === 'number' && (dpl || dpl === 0)) {
                css += `padding-left:${dpl}px;`;
            }
        }
        combination += `@media (max-width: 1199px){${css}}`;
    }

    if (tp || tpt || tpr || tpb || tpl || tp === 0 || tpt === 0 || tpr === 0 || tpb === 0 || tpl === 0) {
        let css = '';
        if (tp) {
            if (typeof tp === 'number' || tp === 0) {
                css = `padding:${tp}px;`;
            }
            if (typeof tp === 'object' && tp && tp.length === 4) {
                css = `padding-top:${tp[0]}px;padding-right:${tp[1]}px;padding-bottom:${tp[2]}px;padding-left:${tp[3]}px;`;
            }
        } else {
            if (typeof tpt === 'number' && (tpt || tpt === 0)) {
                css += `padding-top:${tpt}px;`;
            }
            if (typeof tpr === 'number' && (tpr || tpr === 0)) {
                css += `padding-right:${tpr}px;`;
            }
            if (typeof tpb === 'number' && (tpb || tpb === 0)) {
                css += `padding-bottom:${tpb}px;`;
            }
            if (typeof tpl === 'number' && (tpl || tpl === 0)) {
                css += `padding-left:${tpl}px;`;
            }
        }
        combination += `@media (max-width: 991px){${css}}`;
    }

    if (pp || ppt || ppr || ppb || ppl || pp === 0 || ppt === 0 || ppr === 0 || ppb === 0 || ppl === 0) {
        let css = '';
        if (pp) {
            if (typeof pp === 'number' || pp === 0) {
                css = `padding:${pp}px;`;
            }
            if (typeof pp === 'object' && pp && pp.length === 4) {
                css = `padding-top:${pp[0]}px;padding-right:${pp[1]}px;padding-bottom:${pp[2]}px;padding-left:${pp[3]}px;`;
            }
        } else {
            if (typeof ppt === 'number' && (ppt || ppt === 0)) {
                css += `padding-top:${ppt}px;`;
            }
            if (typeof ppr === 'number' && (ppr || ppr === 0)) {
                css += `padding-right:${ppr}px;`;
            }
            if (typeof ppb === 'number' && (ppb || ppb === 0)) {
                css += `padding-bottom:${ppb}px;`;
            }
            if (typeof ppl === 'number' && (ppl || ppl === 0)) {
                css += `padding-left:${ppl}px;`;
            }
        }
        combination += `@media (max-width: 767px){${css}}`;
    }
    return combination;
};
