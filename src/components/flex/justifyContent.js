/*
 *  justify-content 布局
 *  fs,fe,c,sb,sa
 * */
export const justifyContent = param => {
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
        default:
            content = 'flex-start';
            break;
    }
    const value = `-webkit-justify-content:${content};
                            -webkit-justify-content:${content};
                            -ms-justify-content:${content};
                            justify-content:${content};`;
    return typeof param === 'string' ? flex + value : flex;
};
