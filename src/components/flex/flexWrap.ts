/*
 *  flex-wrap 布局
 *  w,ws
 * */
import Wrap from "./wrap";

type WrapKeys = keyof typeof Wrap;

export const flexWrap = (param: WrapKeys) => {
    const flex = `display:flex;`;
    const value = `flex-wrap:${Wrap[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
