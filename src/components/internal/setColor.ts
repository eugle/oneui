/*
 * 设置输入框placeholder颜色
 * */
import { getColor } from "./getColor";

type ColorKey = string;  // 这可以是一个颜色代码或一个键到某个颜色映射中

interface ISetColorProps {
    c?: ColorKey;
    b?: [any, any, ColorKey];  // 根据您的代码，我们只关心数组的第三个元素
    bg?: boolean;
}

export const setColor = ({ c, b, bg }: ISetColorProps): string => {
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
