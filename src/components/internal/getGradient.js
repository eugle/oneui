/*
 * 获得渐变
 * */
import {DefaultColor as Color} from "../../styles/color";
import color from '../basic/color';

export const getGradient = bg => {
    const color = Object.keys(color).includes(bg) ? Color[bg] : bg;
    return [
        Object.keys(color).includes(bg) ? Color[bg] : bg,
        Object.keys(color).includes(bg) ? Color[bg + 'G'] : bg + 'G'
    ];
};
