/*
 *  flex-direction 布局
 *  r,rs,c,cs
 * */
export const flexDirection = param => {
    let flex = `display:flex;`;
    let direction = 'row';
    switch (param) {
        case 'r':
            direction = 'row';
            break;
        case 'rs':
            direction = 'row-reverse';
            break;
        case 'c':
            direction = 'column';
            break;
        case 'cs':
            direction = 'column-reverse';
            break;
        default:
            direction = 'row';
            break;
    }
    const value = `-webkit-flex-direction:${direction};
                            -webkit-flex-direction:${direction};
                            -ms-flex-direction:${direction};
                            flex-direction:${direction};`;
    return typeof param === 'string' ? flex + value : flex;
};
