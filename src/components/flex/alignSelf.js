/*
 *  align-self 布局
 *  fs,fe,c,b,s
 * */
export const alignSelf = param => {
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
            content = 'auto';
            break;
    }
    const value = `-webkit-align-self:${content};
                            -webkit-align-self:${content};
                            -ms-align-self:${content};
                            align-self:${content};`;
    return typeof param === 'string' ? flex + value : flex;
};
