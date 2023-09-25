/*
 * 改造 textarea
 * 其它属性同 input
 * ro:  可见行数，数字
 * */
import styled from "styled-components";
import { media_container } from "./media/media_container";
import { border } from "./box/border";
import { margin } from "./box/margin";
import { media } from "./media/media";
import { opacity } from "./basic/opacity";
import { getButton } from "./internal/getButton";
import wh from './public/wh';

const desktopMedia = media_container.desktop((p: any) => `font-size:${p.dfs}px;`);
const tabletMedia = media_container.tablet((p: any) => `font-size:${p.tfs}px;`);
const phoneMedia = media_container.phone((p: any) => `font-size:${p.pfs}px;`);
const miniPhone = media_container.miniPhone((p: any) => `font-size:${p.mpfs}px;`);

export const Textarea = styled.textarea<any>`
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
    ${props => props['a'] && typeof props['a'] === 'boolean' && `width:100%;`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && desktopMedia}
    ${props => props['tfs'] && tabletMedia}
    ${props => props['pfs'] && phoneMedia}
    ${props => props['mpfs'] && miniPhone}

	${props => props['ro'] && `rows:${props['ro']};`}
   
    ${props => wh(props)}
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, 'input')}
    ${props => media(props)}
    ${props => opacity(props)}
    word-wrap:break-word;
`;
