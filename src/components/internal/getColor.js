/*
 * 获得颜色
 * c,o,over:是否激活颜色
 * */
import {DefaultColor as Color} from '../../styles/color';

export const getColor = (c, o, over) => {
    //判断透明色
    const opacity = o || o === 0 ? (o > 9 ? 1 : o === 0 ? 0 : '.' + o) : 1;

    let currentColor;
    //如果是 0,0,0 并指定透明度，直接组合返回;
    if (c && String(c).includes(',') && !String(c).includes('rgba')) {
        currentColor = `rgba(${c},${opacity})`;
    }

    //如果是 16进制 并指定透明度，不处理直接返回，输出提示;
    if (c && String(c).includes('#') && (o === 0 || o)) {
        console.log('#,0');
        currentColor = c;
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && c.length <= 2 && Object.keys(Color).includes(c)) {
        currentColor = o || o === 0 ? `rgba(${Color[`${c}RGB`]},${opacity})` : over ? Color[`${c}G`] : Color[c];
    }

    //如果同时给了颜色和透明度 [bg,bgo]
    if (c instanceof Array && c.length) {
        const [cc, co = 1] = c;
        //如果背景是默认单或双数值颜色，判断并组合
        if (cc.length <= 2 && Object.keys(Color).includes(cc)) {
            currentColor = `rgba(${Color[`${cc}RGB`]},${co})`
        }

        //如果是rgba色
        if (String(cc).includes(',') && !String(cc).includes('rgba')) {
            currentColor = `rgba(${cc},${co})`;
        }

        //如果是#十六进制色
        if (String(cc).includes('#')) {
            currentColor = cc;
        }
    }

    return currentColor;
};
