/*
 * 定义边框
 * @标签 b: 全边框
 * @标签 bt,br,bb,bl 定义上右下边框
 * @params: 顺序，size，type，color，opacity
 * */
import {getColor} from "../internal/getColor";

export const border = ({b, bt, br, bb, bl}) => {
    const getBorder = params => {
        let [size, type = 'solid', c = '#fff', o] = params;
        if (type) {
            switch (type) {
                case 'd':
                    type = 'dashed';
                    break;
                default:
                    type = 'solid';
                    break;
            }
        }
        const color = getColor(c, o);
        return `${size}px ${type} ${color}`;
    };

    let border = '';
    if (b && typeof b === 'object') {
        border = `border:${getBorder(b)};`;
    }
    if (bt && typeof bt === 'object') {
        border = `${border} border-top:${getBorder(bt)};`;
    }
    if (br && typeof br === 'object') {
        border = `${border} border-right:${getBorder(br)};`;
    }
    if (bb && typeof bb === 'object') {
        border = `${border} border-bottom:${getBorder(bb)};`;
    }
    if (bl && typeof bl === 'object') {
        border = `${border} border-left:${getBorder(bl)};`;
    }
    return border;
};
