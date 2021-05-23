/*
 * 设置输入框placeholder颜色
 * */
import {getColor} from "./getColor";

export const setColor = ({c, b, bg}) => {
    let color = '#333';
    if (b) {
        color = getColor(b[2], 5);
    }
    if (bg) {
        color = 'rgba(255,255,255,.5)';
    }
    if (c) {
        color = getColor(c, 2);
    }
    return color;
};
