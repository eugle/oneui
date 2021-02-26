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
    if (c && String(c).includes(',') && !String(c).includes('rgba')) {
        c = `rgba(${c},${opacity})`;
    }

    //如果是 16进制 并指定透明度，不处理直接返回，输出提示;
    if (c && String(c).includes('#') && (o === 0 || o)) {
        console.log('Not a rgba: 0,0,0');
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && c.length <= 2) {
        const current = Object.keys(color).includes(c) ? color[c] : c;
        c = o || o === 0 ? `rgba(${Color[`${current}RGB`]},${opacity})` : over ? Color[`${current}G`] : Color[current];
    }
    return c;
};
