/*
 * 改造行内元素
 * 标签 h1~h6,p,span
 * 可定义 color,background,padding,margin,font-size,line-height
 * */
import { getColor } from "./getColor";

export const text = (props: any) => {
    let res = '';
    if (props && props['c']) {
        res = `color:${getColor(props['c'], props['o'])};`;
    }
    if (props && props['fs']) {
        res = res + `font-size:${props['fs']}px;`;
    }
    if (props && props['dfs']) {
        res = res + `@media (max-width: 1200px){font-size:${props['dfs']}px;}`;
    }
    if (props && props['tfs']) {
        res = res + `@media (max-width: 992px){font-size:${props['tfs']}px;}`;
    }
    if (props && props['pfs']) {
        res = res + `@media (max-width: 768px){font-size:${props['pfs']}px;}`;
    }
    if (props && props['lh']) {
        res = res + `line-height:${props['lh']}px;`;
    }
    if (props && props['dlh']) {
        res = res + `@media (max-width: 1200px){line-height:${props['dlh']}px;}`;
    }
    if (props && props['tlh']) {
        res = res + `@media (max-width: 992px){line-height:${props['tlh']}px;}`;
    }
    if (props && props['plh']) {
        res = res + `@media (max-width: 768px){line-height:${props['plh']}px;}`;
    }
    if (props && props['bg']) {
        res = res + `background:${getColor(props['bg'], props['bgo'])};`;
    }
    if (props && props['l']) {
        res = res + `font-weight:300;`;
    }
    if (props && props['b']) {
        res = res + `font-weight:600;`;
    }
    if (props && props['ch']) {
        res = res + `:hover{color:${getColor(props['ch'], props['cho'], true)};transition: all 0.5s;}`;
    }
    if (props && props['bs'] && typeof props['bs'] === 'object') {
        res = res + `box-shadow:${props['bs'][0]}px ${props['bs'][1]}px ${props['bs'][2]}px rgba(0,0,0,${props['bs'][3]});`;
    }
    return res;
};
