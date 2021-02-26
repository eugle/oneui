/*
 *  justify-content 布局
 *  fs,fe,c,sb,sa
 * */
import Flex from "./flex";

export const justifyContent = param => {
    const flex = `display:flex;`;
    const value = `justify-content:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
