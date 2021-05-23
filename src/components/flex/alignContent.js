/*
 *  align-content 布局
 *  fs,fe,c,sb,sa
 * */
import Flex from "./flex";

export const alignContent = param => {
    const flex = `display:flex;`;
    const value = `align-content:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
