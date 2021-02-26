/*
 *  flex-wrap 布局
 *  w,ws
 * */
import Direction from "./direction";

export const flexWrap = param => {
    const flex = `display:flex;`;
    const value = `flex-wrap:${Direction[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
