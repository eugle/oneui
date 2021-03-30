/*
 * 获得颜色
 * c,o,over:是否激活颜色
 * */
import {DefaultColor as Color} from '../../styles/color';
import color from '../basic/color';

export const getColor = (c, o, over) => {
    //判断透明色
    const opacity = o || o === 0 ? (o > 9 ? 1 : o === 0 ? 0 : '.' + o) : 1;

    //如果是 0,0,0 并指定透明度，直接组合返回;
    if (c && typeof c === 'string' && String(c).includes(',') && !String(c).includes('rgba')) {
        c = `rgba(${c},${opacity})`;
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && typeof c === 'string' && c.length <= 2) {
        const current = Object.keys(color).includes(c) ? color[c] : c;
        c = (o || o === 0) ? `rgba(${Color[`${current}RGB`]},${opacity})` : (over ? Color[`${current}G`] : Color[current]);
    }

    //如果同时给了颜色和透明度 [bg,bgo]
    if (c instanceof Array && c.length >= 1) {
        const [cc, co] = c;
        //如果背景是默认单或双数值颜色，判断并组合
        if (Object.keys(Color).includes(cc)) {
            const current = Object.keys(color).includes(cc) ? color[cc] : cc;

            c = (co || co === 0) ? `rgba(${Color[`${current}RGB`]},${opacity})` : Color[current];
        }

        //如果是rgba色
        if (String(cc).includes(',') && !String(cc).includes('rgba')) {
            c = `rgba(${cc},${co || 1})`;
        }

        //如果是#十六进制色或rgba
        if (String(cc).includes('#') || String(cc).includes('rgba')) {
            c = cc;
        }
    }

    return c || '';
};
