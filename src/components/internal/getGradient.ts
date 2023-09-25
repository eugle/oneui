/*
 * 获得渐变
 * */
import { DefaultColor as Color } from "../../styles/color";

export const getGradient = (bg: string): string[] => {
    if (bg && typeof bg === "string") {
        const colorValue = Object.keys(Color).includes(bg) ? Color[bg] : bg;
        const gradientValue = Object.keys(Color).includes(bg) ? Color[`${bg}G`] : `${bg}G`;

        // 确保 Color 中有该渐变值
        if (Color[gradientValue]) {
            return [colorValue, gradientValue];
        } else {
            return [colorValue, colorValue];
        }
    } else {
        return [];
    }
};
