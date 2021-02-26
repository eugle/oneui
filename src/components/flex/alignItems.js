/*
 *  align-items 布局
 *  fs,fe,c,b,s
 * */
import Flex from "./flex";

export const alignItems = param => {
    const flex = `display:flex;`;
    const value = `align-items:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
