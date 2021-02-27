/*
 * 改造 textarea
 * 其它属性同 input
 * ro:  可见行数，数字
 * */
import styled from "styled-components";
import {media_container} from "./media/media_container";
import {border} from "./box/border";
import {margin} from "./box/margin";
import {media} from "./media/media";
import {opacity} from "./basic/opacity";
import {getButton} from "./internal/getButton";
import wh from './public/wh';

export const Textarea = styled.textarea`
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
    ${props => props['a'] && typeof props['a'] === 'boolean' && `width:100%;`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
    ${props => props['mpfs'] && media_container.miniPhone`${`font-size:${props['pfs']}px;`}`}
	${props => props['ro'] && `rows:${props['ro']};`}
   
    ${props => wh(props)}
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, 'input')}
    ${props => media(props)}
     ${props => opacity(props)}
`;
