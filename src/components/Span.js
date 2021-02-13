import styled from "styled-components";
import {padding} from "./box/padding";
import {margin} from "./box/margin";
import {media} from "./media/media";
import {opacity} from "./basic/opacity";
import {text} from "./internal/text";

export const Span = styled.span`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)} ${props =>
    opacity(props)}`;
