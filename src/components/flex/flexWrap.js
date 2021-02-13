/*
 *  flex-wrap 布局
 *  w,ws
 * */
export const flexWrap = param => {
    let flex = `display:flex;`;
    let wrap;
    switch (param) {
        case 'w':
            wrap = 'wrap';
            break;
        case 'ws':
            wrap = 'wrap-reverse';
            break;
        default:
            wrap = 'nowrap';
            break;
    }
    const value = `-webkit-flex-wrap:${wrap};
                            -webkit-flex-wrap:${wrap};
                            -ms-flex-wrap:${wrap};
                            flex-wrap:${wrap};`;
    return typeof param === 'string' ? flex + value : flex;
};
