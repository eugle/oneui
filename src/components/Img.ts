/*
 * 改造img
 * 属性 width,height,border-radius,border,padding,margin
 * */
import styled from "styled-components";
import { media_container } from "./media/media_container";
import { border } from "./box/border";
import { rounded } from "./advance/rounded";
import { padding } from "./box/padding";
import { margin } from "./box/margin";
import { media } from "./media/media";
import { opacity } from "./basic/opacity";
import wh from './public/wh';

export const Img = styled.img`
    object-fit:cover;
    ${(props: any) => props['xw'] && typeof props['xw'] === 'number' && `max-width:${props['xw']}px;`}
    ${(props: any) => props['nw'] && typeof props['nw'] === 'number' && `min-width:${props['nw']}px;`}

    ${(props: any) => props['xwp'] && typeof props['xwp'] === 'number' && `max-width:${props['xwp']}%;`}
    ${(props: any) => props['nwp'] && typeof props['nwp'] === 'number' && `min-width:${props['nwp']}%;`}

    ${(props: any) => props['xh'] && typeof props['xh'] === 'number' && `max-height:${props['xh']}px;`}
    ${(props: any) => props['nh'] && typeof props['nh'] === 'number' && `min-height:${props['nh']}px;`}

    ${(props: any) => props['xhp'] && typeof props['xhp'] === 'number' && `max-height:${props['xhp']}%;`}
    ${(props: any) => props['nhp'] && typeof props['nhp'] === 'number' && `min-height:${props['nhp']}%;`}

    ${(props: any) => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${(props: any) => props['dw'] && media_container.desktop((d: any) => `width:${d['dw']}px;`)}
    ${(props: any) => props['tw'] && media_container.tablet((t: any) => `width:${t['tw']}px;`)}
    ${(props: any) => props['pw'] && media_container.phone((p: any) => `width:${p['pw']}px;`)}



    ${(props: any) => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`};
    ${(props: any) =>
        props['bs'] &&
        typeof props['bs'] === 'object' &&
        `box-shadow:${props['bs'][0]}px ${props['bs'][1]}px ${props['bs'][2]}px rgba(0,0,0,${props['bs'][3]});`} 
    
    ${props => wh(props)}
    ${props => border(props)}
    ${props => rounded(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
    ${props => opacity(props)}
`;
