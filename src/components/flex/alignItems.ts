/*
 *  align-items 布局
 *  fs,fe,c,b,s
 * */
import Flex from "./flex";

type FlexKeys = keyof typeof Flex;

export const alignItems = (param: FlexKeys) => {
    const flex = `display:flex;`;
    const value = `align-items:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
