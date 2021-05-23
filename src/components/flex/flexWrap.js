/*
 *  flex-wrap 布局
 *  w,ws
 * */
import Wrap from "./wrap";

export const flexWrap = param => {
    const flex = `display:flex;`;
    const value = `flex-wrap:${Wrap[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
