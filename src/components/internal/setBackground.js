/*
 * 设置背景渐变
 * */
import {getGradient} from "./getGradient";

export const setBackground = (bg, g) => {
    const [gs, ge] = getGradient(bg);
    return `
        background-color: ${gs};
        background-image: linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
    `;
};
