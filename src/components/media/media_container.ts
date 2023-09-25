/*
 * 媒体查询
 * 分辨率: 0 ~ 767 手机 | 768 ~ 991 平板 | 992 ~ 1199 小屏幕电脑 | 1200 ~ * 大屏幕电脑
 * 名称: phone 手机 | tablet 平板 | desktop 小屏幕电脑
 * */
import { css, FlattenSimpleInterpolation } from 'styled-components';

export const sizes: { [key: string]: number } = {
	desktop: 1199,
	tablet: 991,
	phone: 767,
	miniPhone: 374
};

type MediaQueryFn = (strings: any) => FlattenSimpleInterpolation;

export const media_container: Record<string, MediaQueryFn> = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args: any[]) => css`
        @media (max-width: ${sizes[label]}px) {
            ${args}
        }
    `;
	return acc;
}, {} as Record<string, MediaQueryFn>);
