/*
 * 设置背景渐变
 * */
import {getGradient} from "./getGradient";

export const setBackground = (bg, g) => {
    const [gs, ge] = getGradient(bg);
    return `
        background-color: ${gs};
        background-image: -webkit-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -moz-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -o-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -ms-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
    `;
};
