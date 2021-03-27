/*
 * 获得渐变
 * */
import {DefaultColor as Color} from "../../styles/color";

export const getGradient = bg => {
    if (bg && typeof bg === "string") {
        return [
            Object.keys(Color).includes(bg) ? Color[bg] : bg,
            Object.keys(Color).includes(bg) ? Color[bg + 'G'] : bg + 'G'
        ];
    }else{
        return [];
    }
};
