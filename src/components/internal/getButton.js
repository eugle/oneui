/*
 * 按钮默认样式
 * padding,font-size,color,border-radius
 * 大小 size: xs,s,m,l
 * 背景 bg,bgo
 * 颜色 c,co
 * 透明度 o
 * 圆角 r
 * 边框透明 bro
 * */
import {DefaultColor as Color} from "../../styles/color";
import {getColor} from "./getColor";
import {getGradient} from "./getGradient";

export const getButton = (props, type) => {
    const {xs, s, l, xl, bg, bgo, g, c, co, b, bt, br, bb, bl, bro, i = false, fs, pfs, cp, cd} = props;
    let {r} = props;
    let rounded = '';

    let style = `
    outline: none;
    white-space: nowrap;
    vertical-align: middle;
    background-image: none;
    -webkit-writing-mode: horizontal-tb !important;
    `;

    const singer = bgo && Array.isArray(bgo) && bgo.length === 1 && bgo[0];
    const background = bgo === 0 || singer === 0 && !bg ? 'rgba(255,255,255,0)' : getColor(bg, bgo);
    const color = getColor(c, co);

    let padding = type === 'button' ? '6px 16px' : '6px',
        border = `1px solid ${Color.fc};`,
        fontSize = fs || pfs || 12,
        borderRadius = type === 'button' ? '3px' : '0',
        lineHeight = '1.42857143';

    if (xs) {
        padding = type === 'button' ? '1px 9px' : '1px 5px';
        lineHeight = i ? '1.4' : '1.6';
    }
    if (s) {
        padding = type === 'button' ? '5px 14px' : '5px';
        lineHeight = '1.5';
    }
    if (l) {
        padding = type === 'button' ? '8px 20px' : '8px';
        lineHeight = '1.33333';
    }
    if (xl) {
        padding = type === 'button' ? '12px 28px' : '12px';
        lineHeight = '1.33333';
        fontSize = fs || pfs || 14;
    }
    if (r) {
        if (typeof r === 'number') {
            rounded = `${r}px`;
        }
        if (typeof r === 'object') {
            r.forEach(i => (rounded = rounded + `${i}px `));
        }
    }

    const [gs, ge] = getGradient(bg);

    let textColor = Color.f6;
    if (c) {
        textColor = color;
    } else {
        if (bg && bg !== 'fe' && (!bgo || bgo !== 0 || singer !== 0)) {
            textColor = Color.ff;
        }
        if (bg && (bgo === 0 || singer === 0)) {
            textColor = getColor(bg)
        }
        if ((bg === 'ff' || bg === 'fe' || bg === '255,255,255') && !bgo && !c) {
            textColor = Color.f3;
        }
        if ((bg === 'f0' || bg === 'f3' || bg === '0,0,0') && !bgo && !c) {
            textColor = Color.fe;
        }
    }

    if (!cp && !cd && type === 'button') {
        style += `cursor:pointer;`
    }
    if (background && !g) {
        style += `background:${background};`
    }
    if (type === 'button') {
        style += `text-align: center; touch-action: manipulation;-webkit-appearance: button;`
    }
    if (g) {
        let gradient = `
        background-color: ${gs};
        background-image: -webkit-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -moz-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -o-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -ms-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
    `;
        style += gradient
    }

    return (
        style +
        `
        padding:${padding};
        font-size:${fontSize}px;
        ${!b && !bt && !br && !bb && !bl ? `border:${bgo === 0 || bg ? `1px solid ${getColor(bg, bro)};` : border}` : ''}
        border-radius:${r === 0 ? '0' : rounded || borderRadius};
        color:${textColor};
        line-height:${lineHeight};
    `
    );
};
