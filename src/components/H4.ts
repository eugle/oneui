import styled from "styled-components";
import { padding } from "./box/padding";
import { margin } from "./box/margin";
import { media } from "./media/media";
import { text } from "./internal/text";

export const H4 = styled.h4`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
