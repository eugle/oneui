/*
 *  align-items 布局
 *  fs,fe,c,b,s
 * */
export const alignItems = param => {
    let flex = `display:flex;`;
    let content;
    switch (param) {
        case 'fs':
            content = 'flex-start';
            break;
        case 'fe':
            content = 'flex-end';
            break;
        case 'c':
            content = 'center';
            break;
        case 'b':
            content = 'baseline';
            break;
        case 's':
            content = 'stretch';
            break;
        default:
            content = 'flex-start';
            break;
    }
    const value = `-webkit-align-items:${content};
                            -webkit-align-items:${content};
                            -ms-align-items:${content};
                            align-items:${content};`;
    return typeof param === 'string' ? flex + value : flex;
};
