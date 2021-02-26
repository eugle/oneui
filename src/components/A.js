/*
 * 改变a链接
 * color,font-size,line-height,border,padding,margin
 * :hover ch,cho 颜色，透明度
 * */
import styled from "styled-components";
import {flexDirection} from "./flex/flexDirection";
import {media_container} from "./media/media_container";
import {flexWrap} from "./flex/flexWrap";
import {justifyContent} from "./flex/justifyContent";
import {alignItems} from "./flex/alignItems";
import {alignContent} from "./flex/alignContent";
import {alignSelf} from "./flex/alignSelf";
import {setBackground} from "./internal/setBackground";
import {getColor} from "./internal/getColor";
import {border} from "./box/border";
import {padding} from "./box/padding";
import {margin} from "./box/margin";
import {media} from "./media/media";
import {opacity} from "./basic/opacity";
import {column} from "./float/column";

export const A = styled.a`
    ${props => props['fd'] && flexDirection(props['fd'])}
    ${props => props['dfd'] && media_container.desktop`${flexDirection(props['dfd'])}`}
    ${props => props['tfd'] && media_container.tablet`${flexDirection(props['tfd'])}`}
    ${props => props['pfd'] && media_container.phone`${flexDirection(props['pfd'])}`}
     
    ${props => props['fw'] && flexWrap(props['fw'])}
    ${props => props['dfw'] && media_container.desktop`${flexWrap(props['dfw'])}`}
    ${props => props['tfw'] && media_container.tablet`${flexWrap(props['tfw'])}`}
    ${props => props['pfw'] && media_container.phone`${flexWrap(props['pfw'])}`}
    
    ${props => props['jc'] && justifyContent(props['jc'])}
    ${props => props['djc'] && media_container.desktop`${justifyContent(props['djc'])}`}
    ${props => props['tjc'] && media_container.tablet`${justifyContent(props['tjc'])}`}
    ${props => props['pjc'] && media_container.phone`${justifyContent(props['pjc'])}`}
    
    ${props => props['ai'] && alignItems(props['ai'])}
    ${props => props['dai'] && media_container.desktop`${alignItems(props['dai'])}`}
    ${props => props['tai'] && media_container.tablet`${alignItems(props['tai'])}`}
    ${props => props['pai'] && media_container.phone`${alignItems(props['pai'])}`}
    ${props => props['ac'] && alignContent(props['ac'])}
    ${props => props['as'] && alignSelf(props['as'])}
    ${props => props['f'] && typeof props['f'] === 'number' && `flex:${props['f']};`}
    ${props => props['df'] && media_container.desktop`${flexDirection(props['df'])}`}
    ${props => props['tf'] && media_container.tablet`${flexDirection(props['tf'])}`}
    ${props => props['pf'] && media_container.phone`${flexDirection(props['pf'])}`}
    ${props => props['_o'] && typeof props['_o'] === 'number' && `order:${props['_o']};`}
    
    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['dwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
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

    ${props =>
    props['bg'] && typeof props['bg'] === 'string' && props['g']
        ? setBackground(props['bg'], props['g'])
        : `background:${getColor(props['bg'], props['bgo'])};`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}

    ${props => props['c'] && typeof props['c'] === 'string' && `color:${getColor(props['c'], props['o'])};`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
   
    ${props => props['lh'] && typeof props['lh'] === 'number' && `line-height:${props['lh']}px;`}
    ${props => props['dlh'] && media_container.desktop`${`line-height:${props['dlh']}px;`}`}
    ${props => props['tlh'] && media_container.tablet`${`line-height:${props['tlh']}px;`}`}
    ${props => props['plh'] && media_container.phone`${`line-height:${props['plh']}px;`}`}
    ${props => border(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
     ${props => opacity(props)}
    ${props => props['col'] && column(props)}

    ${props =>
    props['ch'] &&
    `
        :hover{transition: all 0.5s;color:${getColor(props['ch'], props['cho'], true)};}
    `}
    ${props =>
    props['bh'] &&
    `
        :hover{transition: all 0.5s;background:${getColor(props['bh'], props['bho'])};}
    `}
`;
