/*
 * 获得渐变
 * */
import {DefaultColor as Color} from "../../styles/color";
import color from '../basic/color';

export const getGradient = bg => {
    if (bg && typeof bg === "string") {
        return [
            Object.keys(color).includes(bg) ? Color[bg] : bg,
            Object.keys(color).includes(bg) ? Color[bg + 'G'] : bg + 'G'
        ];
    }else{
        return [];
    }
};
