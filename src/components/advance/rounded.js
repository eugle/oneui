/*
 * 定义圆角
 * @param: number,全部。[1,1,1,1]，指定四个角,上右下左
 */
export const rounded = ({r}) => {
    let rounded = '';
    if (r) {
        if (typeof r === 'number') {
            rounded = `${r}px`;
        }
        if (typeof r === 'object') {
            r.forEach(i => (rounded = rounded + `${i}px `));
        }
    }
    return `border-radius:${r === 0 ? '0' : rounded};`;
};
