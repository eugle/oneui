/*
 * 改造div
 * 布局属性 flex-direction,flex-wrap,justify-content,align-items,align-content,align-self,order
 * 常规属性 width,height,color,font-size,line-height,background,border|border-x,margin,padding,l,b
 * 定位属性 position,z-index,top,right,bottom,left, pa|pf 默认有 100%, nwp 可去除
 * 内容对齐 text-align
 * 超出隐藏 oh,
 * 鼠标指针 cp: 手形,cc:十字,
 * 最大最小宽高 xw,nw,xwp,nwp,xh,nh,xhp,nhp
 * 整体透明 o
 * 旋转 tr
 * */

import styled from 'styled-components';
import { media_container } from './media/media_container';
import { media } from './media/media';
import { getColor } from './internal/getColor';
import { setBackground } from './internal/setBackground';
import { flexDirection } from './flex/flexDirection';
import { flexWrap } from './flex/flexWrap';
import { justifyContent } from './flex/justifyContent';
import { alignItems } from './flex/alignItems';
import { alignContent } from './flex/alignContent';
import { alignSelf } from './flex/alignSelf';
import { border } from './box/border';
import { padding } from './box/padding';
import { margin } from './box/margin';
import { rounded } from './advance/rounded';
import { column } from './float/column';
import { opacity } from './basic/opacity';
import { position } from './position';
import { animate } from './animate';
import wh from './public/wh';

const desktopMedia = media_container.desktop((p: any) => `${flexDirection(p['dfd'])}`);

export const Div = styled.div<any>`
    ${props => wh(props)}
    ${props => border(props)}
    ${props => rounded(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
    ${props => opacity(props)}
    ${props => position(props)}
    ${props => animate(props)}
    
    ${props => props['fd'] && flexDirection(props['fd'])}
    ${props => props['dfs'] && desktopMedia}
    ${props => props['tfd'] && media_container.tablet((p: any) => `${flexDirection(p['tfd'])}`)}
    ${props => props['pfd'] && media_container.phone((p: any) => `${flexDirection(p['pfd'])}`)}
     
    ${props => props['fw'] && flexWrap(props['fw'])}
    ${props => props['dfw'] && media_container.desktop((p: any) => `${flexWrap(p['dfw'])}`)}
    ${props => props['tfw'] && media_container.tablet((p: any) => `${flexWrap(p['tfw'])}`)}
    ${props => props['pfw'] && media_container.phone((p: any) => `${flexWrap(p['pfw'])}`)}
    
    ${props => props['jc'] && justifyContent(props['jc'])}
    ${props => props['djc'] && media_container.desktop((p: any) => `${justifyContent(p['djc'])}`)}
    ${props => props['tjc'] && media_container.tablet((p: any) => `${justifyContent(p['tjc'])}`)}
    ${props => props['pjc'] && media_container.phone((p: any) => `${justifyContent(p['pjc'])}`)}

    
    ${props => props['ai'] && alignItems(props['ai'])}
    ${props => props['dai'] && media_container.desktop((d: any) => `${alignItems(d['dai'])}`)}
    ${props => props['tai'] && media_container.tablet((t: any) => `${alignItems(t['tai'])}`)}
    ${props => props['pai'] && media_container.phone((p: any) => `${alignItems(p['pai'])}`)}
    ${props => props['ac'] && alignContent(props['ac'])}
    ${props => props['as'] && alignSelf(props['as'])}
    
    ${props => props['f'] && typeof props['f'] === 'number' && `flex:${props['f']};`}
    ${props => props['df'] && media_container.desktop((d: any) => `${flexDirection(d['df'])}`)}
    ${props => props['tf'] && media_container.tablet((t: any) => `${flexDirection(t['tf'])}`)}
    ${props => props['pf'] && media_container.phone((p: any) => `${flexDirection(p['pf'])}`)}
    ${props => props['_o'] && typeof props['_o'] === 'number' && `order:${props['_o']};`}
   
    ${props =>
        props['bg'] && (typeof props['bg'] === 'string' && props['g'])
            ? setBackground(props['bg'], props['g'])
            : `background:${getColor(props['bg'], props['bgo'])};`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}

    ${props => props['c'] && typeof props['c'] === 'string' && `color:${getColor(props['c'], props['o'])};`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop((d: any) => `font-size:${d['dfs']}px;`)}
    ${props => props['tfs'] && media_container.tablet((t: any) => `font-size:${t['tfs']}px;`)}
    ${props => props['pfs'] && media_container.phone((p: any) => `font-size:${p['pfs']}px;`)}
   
    ${props => props['lh'] && typeof props['lh'] === 'number' && `line-height:${props['lh']}px;`}
    ${props => props['dlh'] && media_container.desktop((d: any) => `line-height:${d['dlh']}px;`)}
    ${props => props['tlh'] && media_container.tablet((t: any) => `line-height:${t['tlh']}px;`)}
    ${props => props['plh'] && media_container.phone((p: any) => `line-height:${p['plh']}px;`)}
    
    ${props => props['l'] && typeof props['l'] === 'boolean' && `font-weight:300;`}
    ${props => props['b'] && typeof props['b'] === 'boolean' && `font-weight:600;`}
        
    ${props => props['bg'] && (typeof props['bg'] === 'string' && (props['g']) ? setBackground(props['bg'], props['g']) : `background:${getColor(props['bg'], props['bgo'])};`)}
    ${props => props['dbg'] && media_container.desktop`${props['g'] ? setBackground(props['dbg'], props['g']) : `background:${getColor(props['dbg'], props['dbgo'])};`}`}
    ${props => props['tbg'] && media_container.tablet`${props['g'] ? setBackground(props['tbg'], props['g']) : `background:${getColor(props['tbg'], props['tbgo'])};`}`}
    ${props => props['pbg'] && media_container.phone`${props['g'] ? setBackground(props['pbg'], props['g']) : `background:${getColor(props['pbg'], props['pbgo'])};`}`}
    
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
     
    ${props => props['col'] && column(props)}
    ${props => props['dcol'] && media_container.desktop`${column(props['dcol'])}`}
    ${props => props['tcol'] && media_container.tablet`${column(props['tcol'])}`}
    ${props => props['pcol'] && media_container.phone`${column(props['pcol'])}`}

    ${props => props['tl'] && typeof props['tl'] === 'boolean' && `text-align:left;`}
    ${props => props['tc'] && typeof props['tc'] === 'boolean' && `text-align:center;`}
    ${props => props['tr'] && typeof props['tr'] === 'boolean' && `text-align:right;`}
    
    ${props => props['oh'] && typeof props['oh'] === 'boolean' && `overflow:hidden;`}
    ${props => props['oa'] && typeof props['oa'] === 'boolean' && `overflow:auto;`}
    ${props => props['oy'] && typeof props['oy'] === 'boolean' && `overflow-x:auto;overflow-y:hidden;`}
    ${props => props['ox'] && typeof props['ox'] === 'boolean' && `overflow-y:auto;overflow-x:hidden;`}
    
    ${props => props['cp'] && typeof props['cp'] === 'boolean' && `cursor:pointer;`}
    ${props => props['cc'] && typeof props['cc'] === 'boolean' && `cursor:crosshair;`}
    
    ${props => props['xw'] && typeof props['xw'] === 'number' && `max-width:${props['xw']}px;`}
    ${props => props['nw'] && typeof props['nw'] === 'number' && `min-width:${props['nw']}px;`}
    
    ${props => props['xwp'] && typeof props['xwp'] === 'number' && `max-width:${props['xwp']}%;`}
    ${props => props['nwp'] && typeof props['nwp'] === 'number' && `min-width:${props['nwp']}%;`}
    
    ${props => props['xh'] && typeof props['xh'] === 'number' && `max-height:${props['xh']}px;`}
    ${props => props['nh'] && typeof props['nh'] === 'number' && `min-height:${props['nh']}px;`}
    
    ${props => props['xhp'] && typeof props['xhp'] === 'number' && `max-height:${props['xhp']}%;`}
    ${props => props['nhp'] && typeof props['nhp'] === 'number' && `min-height:${props['nhp']}%;`}
    ${props => props['ns'] && typeof props['ns'] === 'boolean' && `user-select: none;`}
    ${props => props['bs'] && typeof props['bs'] === 'object' && `box-shadow:${props['bs'][0]}px ${props['bs'][1]}px ${props['bs'][2]}px rgba(0,0,0,${props['bs'][3]});`} 
    ${props => (props['tr'] && typeof props['tr'] === 'number') && `transform:rotate(${props['tr']}deg);`}   
    ${props => (props['ch'] || props['cho']) && `
        :hover{color:${getColor(props['ch'] || props['c'], props['cho'], true)};transition: all 0.5s;}
    `} 
    ${props => (props['bh'] || props['bho']) && `
        :hover{background:${getColor(props['bh'] || props['bg'], props['bho'])};transition: all 0.5s;}
    `} 
    box-sizing:border-box;
`;
