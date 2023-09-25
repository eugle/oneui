/*
 *  flex-direction 布局
 *  r,rs,c,cs
 * */
import Direction from "./direction";

export const flexDirection = (param: any) => {
    const flex = `display:flex;`;
    const value = `flex-direction:${Direction[param]};`;

    return typeof param === 'string' ? flex + value : flex;
};
