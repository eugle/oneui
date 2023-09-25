import { sizes } from '../media/media_container';

export default (props: any) => {
    const arr: string[] = ['w', 'h'];
    const tag: { [key: string]: string } = { w: 'width', h: 'height' };
    const scr: { [key: string]: string } = { d: 'desktop', t: 'tablet', p: 'phone' };

    arr.forEach(item => arr.push(item + 'p'));
    arr.forEach(item => Object.keys(scr).forEach(child => arr.push(child + item)));

    let css = '';

    Object.keys(props).forEach(item => {
        const firstChar = item.charAt(0);
        const secondChar = item.charAt(1);

        if (arr.includes(item) && typeof props[item] === "number") {
            if (item.length === 1 || arr.slice(0, 4).includes(item)) {
                const tagKey = tag[firstChar];
                if (tagKey) { // Ensure tagKey is defined before using it
                    css += `${tagKey}:${props[item]}${item.length === 1 ? 'px' : '%'};`;
                }
            } else if (item.length >= 2) {
                const scrKey = scr[firstChar];
                const tagKey = tag[secondChar];
                if (scrKey && tagKey) { // Ensure both keys are defined before using them
                    css += `@media (max-width: ${sizes[scrKey]}px){
                        ${tagKey}:${props[item]}${item.length === 2 ? 'px' : '%'};
                    }`;
                }
            }
        }
    });
    return css;
}
