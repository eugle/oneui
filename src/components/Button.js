/*
 * 改造button
 * 属性 width,height,border-radius,border,padding,margin
 * 全宽 a
 * */
import styled from "styled-components";
import {getColor} from "./internal/getColor";
import {getRGB} from "./internal/getRGB";
import {border} from "./box/border";
import {margin} from "./box/margin";
import {media} from "./media/media";
import {opacity} from "./basic/opacity";
import {flexDirection} from "./flex/flexDirection";
import {media_container} from "./media/media_container";
import {flexWrap} from "./flex/flexWrap";
import {justifyContent} from "./flex/justifyContent";
import {alignItems} from "./flex/alignItems";
import {alignContent} from "./flex/alignContent";
import {alignSelf} from "./flex/alignSelf";
import {column} from "./float/column";
import {getButton} from "./internal/getButton";
import {buttonIcon} from "./internal/buttonIcon";
import wh from './public/wh';

export const Button = styled.button`
	transition: all 0.5s;
	:focus {outline:none};
	:focus {outline:none !important};
    :hover {
    	transition: all 0.5s;
        background: ${props => (props["bg"] ? getColor(props["bg"], props["bgo"], true) : "#fff;")}
        ${props => (props["bgo"] || props["bgo"] === 0) && `border:${props.b ? props.b[0] : `1`}px ${props.b && props.b[1] && props.b[1] === "d" ? `dashed` : `solid`} ${getColor(
    props.b ? props.b[2] : props["bg"] || "#ccc",
    null,
    1)}
            color:${getColor(props.b ? props.b[2] : props["bgo"] === 0 ? props["bg"] : "", null, 1)}
        `}
    }
    
    ${props => wh(props)}
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, "button")}
    ${props => media(props)}
    ${props => opacity(props)}

    ${props => props["fd"] && flexDirection(props["fd"])}
    ${props => props["dfd"] && media_container.desktop`${flexDirection(props["dfd"])}`}
    ${props => props["tfd"] && media_container.tablet`${flexDirection(props["tfd"])}`}
    ${props => props["pfd"] && media_container.phone`${flexDirection(props["pfd"])}`}
     
    ${props => props["fw"] && flexWrap(props["fw"])}
    ${props => props["dfw"] && media_container.desktop`${flexWrap(props["dfw"])}`}
    ${props => props["tfw"] && media_container.tablet`${flexWrap(props["tfw"])}`}
    ${props => props["pfw"] && media_container.phone`${flexWrap(props["pfw"])}`}
    
    ${props => props["jc"] && justifyContent(props["jc"])}
    ${props => props["djc"] && media_container.desktop`${justifyContent(props["djc"])}`}
    ${props => props["tjc"] && media_container.tablet`${justifyContent(props["tjc"])}`}
    ${props => props["pjc"] && media_container.phone`${justifyContent(props["pjc"])}`}
    
    ${props => props["ai"] && alignItems(props["ai"])}
    ${props => props["dai"] && media_container.desktop`${alignItems(props["dai"])}`}
    ${props => props["tai"] && media_container.tablet`${alignItems(props["tai"])}`}
    ${props => props["pai"] && media_container.phone`${alignItems(props["pai"])}`}
    ${props => props["ac"] && alignContent(props["ac"])}
    ${props => props["as"] && alignSelf(props["as"])}
    ${props => props["f"] && typeof props["f"] === "number" && `flex:${props["f"]};`}
    ${props => props["df"] && media_container.desktop`${flexDirection(props["df"])}`}
    ${props => props["tf"] && media_container.tablet`${flexDirection(props["tf"])}`}
    ${props => props["pf"] && media_container.phone`${flexDirection(props["pf"])}`}
    ${props => props["_o"] && typeof props["_o"] === "number" && `order:${props["_o"]};`}

    ${props => props["br"] && typeof props["br"] === "number" && `border-radius:${props["br"]}px;`}
    ${props => props["a"] && typeof props["a"] === "boolean" && `width:100%;`}
   
    ${props => props["col"] && column(props)}
    ${props => props["_pr"] && typeof props["_pr"] === "boolean" && `position:relative;`}
    ${props => props["_pa"] && typeof props["_pa"] === "boolean" && `position:absolute;width:100%;`}
    ${props => props["_pf"] && typeof props["_pf"] === "boolean" && `position:fixed;width:100%;`}
    ${props => props["_pi"] && typeof props["_pi"] === "boolean" && `position:inherit;`}
    ${props => props["_z"] && typeof props["_z"] === "number" && `z-index:${props["_z"]};`}
    ${props => (props["_t"] || props["_t"] === 0) && typeof props["_t"] === "number" && `top:${props["_t"]}px;`}
    ${props => (props["_r"] || props["_r"] === 0) && typeof props["_r"] === "number" && `right:${props["_r"]}px;`}
    ${props => (props["_b"] || props["_b"] === 0) && typeof props["_b"] === "number" && `bottom:${props["_b"]}px;`}
    ${props => (props["_l"] || props["_l"] === 0) && typeof props["_l"] === "number" && `left:${props["_l"]}px;`}

    ${props => props["tl"] && typeof props["tl"] === "boolean" && `text-align:left;`}
    ${props => props["tc"] && typeof props["tc"] === "boolean" && `text-align:center;`}
    ${props => props["tr"] && typeof props["tr"] === "boolean" && `text-align:right;`}
    ${props => props["fs"] && typeof props["fs"] === "number" && `font-size:${props["fs"]}px;`}
    ${props => props["dfs"] && media_container.desktop`${`font-size:${props["dfs"]}px;`}`}
    ${props => props["tfs"] && media_container.tablet`${`font-size:${props["tfs"]}px;`}`}
    ${props => props["pfs"] && media_container.phone`${`font-size:${props["pfs"]}px;`}`}
    ${props => props["mpfs"] && media_container.miniPhone`${`font-size:${props["mpfs"]}px;`}`}
    ${props => props["cp"] && typeof props["cp"] === "boolean" && `cursor:pointer;`}
    ${props => props["cd"] && typeof props["cd"] === "boolean" && `cursor:default;`}
    ${props => props["bs"] && typeof props["bs"] === "object" &&
    `box-shadow:${props["bs"][0]}px ${props["bs"][1]}px ${props["bs"][2]}px rgba(${getRGB(props["bs"][4])},${props["bs"][3]});`} 
        
    ${props => props["i"] && buttonIcon()}
    ${props =>
    props["ch"] &&
    `
        :hover{transition: all 0.5s;color:${getColor(props["ch"], props["cho"], true)};}
    `} 
    ${props =>
    props["bh"] &&
    `
        :hover{transition: all 0.5s;background:${getColor(props["bh"], props["bho"])};}
    `} 
    
`;
