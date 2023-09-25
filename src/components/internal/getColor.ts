import { DefaultColor as Color } from '../../styles/color';

interface ColorMap {
    [key: string]: string;
}

const color: ColorMap = require('../basic/color');

export const getColor = (c: any, o?: any, over?: any): string => {
    // 判断透明色
    const opacity = o || o === 0 ? (o > 9 ? 1 : o === 0 ? 0 : '.' + o) : 1;

    // 如果是 0,0,0 并指定透明度，直接组合返回;
    if (typeof c === 'string' && c.includes(',') && !c.includes('rgba')) {
        c = `rgba(${c},${opacity})`;
    }

    // 如果是默认单或双数值颜色，判断并组合;
    if (typeof c === 'string' && c.length <= 2) {
        const current = Object.keys(color).includes(c) ? color[c] : c;
        c = (o || o === 0) ? `rgba(${Color[`${current}RGB` as keyof typeof Color]},${opacity})` : (over ? Color[`${current}G` as keyof typeof Color] : Color[current as keyof typeof Color]);
    }

    // 如果同时给了颜色和透明度 [bg,bgo]
    if (Array.isArray(c) && c.length >= 1) {
        const [cc, co] = c;
        const coStr = typeof co === 'number' ? co.toString() : co; // 将数字转化为字符串，以处理后续逻辑

        // 如果背景是默认单或双数值颜色，判断并组合
        if (typeof cc === 'string' && Object.keys(Color).includes(cc)) {
            const current = Object.keys(color).includes(cc) ? color[cc] : cc;
            c = (co || co === 0) ? `rgba(${Color[`${current}RGB` as keyof typeof Color]},${opacity})` : Color[current as keyof typeof Color];
        }

        // 如果是rgba色
        if (typeof cc === 'string' && cc.includes(',') && !cc.includes('rgba')) {
            c = `rgba(${cc},${coStr || 1})`;
        }

        // 如果是#十六进制色或rgba
        if (typeof cc === 'string' && (cc.includes('#') || cc.includes('rgba'))) {
            c = cc;
        }
    }

    return String(c) || '';
};
