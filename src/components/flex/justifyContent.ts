/*
 *  justify-content 布局
 *  fs,fe,c,sb,sa
 * */
import Flex from "./flex";

type FlexKeys = keyof typeof Flex;

export const justifyContent = (param: FlexKeys) => {
    const flex = `display:flex;`;
    const value = `justify-content:${Flex[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
