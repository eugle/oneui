import styled from "styled-components";
import {padding} from "./box/padding";
import {margin} from "./box/margin";
import {media} from "./media/media";

export const Ul = styled.ul`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
