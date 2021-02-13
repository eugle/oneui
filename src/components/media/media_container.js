/*
 * 媒体查询
 * 分辨率: 0 ~ 767 手机 | 768 ~ 991 平板 | 992 ~ 1199 小屏幕电脑 | 1200 ~ * 大屏幕电脑
 * 名称: phone 手机 | tablet 平板 | desktop 小屏幕电脑
 * */
import {css} from "styled-components";

export const sizes = {desktop: 1199, tablet: 991, phone: 767, miniPhone: 374};
export const media_container = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;
    return acc;
}, {});
