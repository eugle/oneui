/*
 * 设置背景渐变
 * */
import { getGradient } from "./getGradient";

type GradientKey = string;  // 这里你可能想更明确地定义DefaultColor的所有可能的键，而不是使用简单的string类型

export const setBackground = (bg: GradientKey, g: number): string => {
    const [gs, ge] = getGradient(bg);
    return `
        background-color: ${gs};
        background-image: linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
    `;
};
