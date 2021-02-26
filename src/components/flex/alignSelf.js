/*
 *  align-self 布局
 *  fs,fe,c,b,s
 * */
import Flex from "./flex";

export const alignSelf = param => {
    const flex = `display:flex;`;
    const value = `align-self:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
