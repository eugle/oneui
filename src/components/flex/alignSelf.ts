/*
 *  align-self 布局
 *  fs,fe,c,b,s
 * */
import Flex from "./flex";

type FlexKeys = keyof typeof Flex;

export const alignSelf = (param: FlexKeys) => {
    const flex = `display:flex;`;
    const value = `align-self:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
