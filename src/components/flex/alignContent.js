/*
 *  align-content 布局
 *  fs,fe,c,sb,sa
 * */
export const alignContent = param => {
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
        case 'sb':
            content = 'space-between';
            break;
        case 'sa':
            content = 'space-around';
            break;
        case 's':
            content = 'stretch';
            break;
        default:
            content = 'flex-start';
            break;
    }
    const value = `-webkit-align-content:${content};
                            -webkit-align-content:${content};
                            -ms-align-content:${content};
                            align-content:${content};`;
    return typeof param === 'string' ? flex + value : flex;
};
