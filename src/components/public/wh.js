import {sizes} from '../media/media_container';

export default props => {
    const arr = ['w', 'h'];
    const tag = {w: 'width', h: 'height'};
    const scr = {d: 'desktop', t: 'tablet', p: 'phone'};
    arr.forEach(item => arr.push(item + 'p'));
    arr.forEach(item => Object.keys(scr).forEach(child => arr.push(child + item)));
    let css = '';
    Object.keys(props).forEach(item => {
        if (arr.includes(item)) {
            if (typeof props[item] === "number") {
                if (item.length === 1 || arr.slice(0, 4).includes(item)) {
                    css += `${[tag[[...item].shift()]]}:${props[item]}${item.length === 1 ? 'px' : '%'};`;
                }
                if (item.length >= 2 && !arr.slice(0, 4).includes(item)) {
                    css += `@media (max-width: ${sizes[scr[[...item].shift()]]}px){
                        ${tag[[...item][1]]}:${props[item]}${item.length === 2 ? 'px' : '%'};
                    }`;
                }
            }
        }
    });
    return css;
}
