/*
 * 改造img
 * 属性 width,height,border-radius,border,padding,margin
 * */
import styled from "styled-components";
import {media_container} from "./media/media_container";
import {border} from "./box/border";
import {rounded} from "./advance/rounded";
import {padding} from "./box/padding";
import {margin} from "./box/margin";
import {media} from "./media/media";
import {opacity} from "./basic/opacity";

export const Img = styled.img`
    object-fit:cover;
    ${props => props['xw'] && typeof props['xw'] === 'number' && `max-width:${props['xw']}px;`}
    ${props => props['nw'] && typeof props['nw'] === 'number' && `min-width:${props['nw']}px;`}

    ${props => props['xwp'] && typeof props['xwp'] === 'number' && `max-width:${props['xwp']}%;`}
    ${props => props['nwp'] && typeof props['nwp'] === 'number' && `min-width:${props['nwp']}%;`}

     ${props => props['xh'] && typeof props['xh'] === 'number' && `max-height:${props['xh']}px;`}
    ${props => props['nh'] && typeof props['nh'] === 'number' && `min-height:${props['nh']}px;`}

    ${props => props['xhp'] && typeof props['xhp'] === 'number' && `max-height:${props['xhp']}%;`}
    ${props => props['nhp'] && typeof props['nhp'] === 'number' && `min-height:${props['nhp']}%;`}

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
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`};
    ${props =>
    props['bs'] &&
    typeof props['bs'] === 'object' &&
    `box-shadow:${props['bs'][0]}px ${props['bs'][1]}px ${props['bs'][2]}px rgba(0,0,0,${props['bs'][3]});`} 
    
    ${props => border(props)}
    ${props => rounded(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
    ${props => opacity(props)}
`;
