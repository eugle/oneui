/*
 * 改造input
 * 属性 width,height,border-radius,border,padding,margin
 * 字体 phfs,placeholder font size
 * */
import styled from "styled-components";
import {media_container} from "./media/media_container";
import {border} from "./box/border";
import {margin} from "./box/margin";
import {media} from "./media/media";
import {opacity} from "./basic/opacity";
import {setColor} from "./internal/setColor";
import {getButton} from "./internal/getButton";

export const Input = styled.input`
    ::-webkit-input-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    :-moz-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    ::-moz-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    :-ms-input-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['wwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
    ${props => props['twp'] && media_container.tablet`${`width:${props['twp']}%;`}`}
    ${props => props['pwp'] && media_container.phone`${`width:${props['pwp']}%;`}`}
  
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['dh'] && media_container.desktop`${`height:${props['dh']}px;`}`}
    ${props => props['th'] && media_container.tablet`${`height:${props['th']}px;`}`}
    ${props => props['ph'] && media_container.phone`${`height:${props['ph']}px;`}`}
    
    ${props => props['hp'] && typeof props['hp'] === 'number' && `height:${props['hp']}%;`}
    ${props => props['dhp'] && media_container.desktop`${`height:${props['dhp']}%;`}`}
    ${props => props['thp'] && media_container.tablet`${`height:${props['thp']}%;`}`}
    ${props => props['php'] && media_container.phone`${`height:${props['php']}%;`}`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
    ${props => props['a'] && typeof props['a'] === 'boolean' && `width:100%;`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
    ${props => props['mpfs'] && media_container.miniPhone`${`font-size:${props['pfs']}px;`}`}
    
    ${props => props['tl'] && typeof props['tl'] === 'boolean' && `text-align:left;vertical-align:middle;`}
    ${props => props['tc'] && typeof props['tc'] === 'boolean' && `text-align:center;vertical-align:middle;`}
    ${props => props['tr'] && typeof props['tr'] === 'boolean' && `text-align:right;vertical-align:middle;`}
        
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, 'input')}
    ${props => media(props)}
    ${props => opacity(props)}
`;
