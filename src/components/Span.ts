import styled from "styled-components";
import { padding } from "./box/padding";
import { margin } from "./box/margin";
import { media } from "./media/media";
import { opacity } from "./basic/opacity";
import { text } from "./internal/text";

interface SpanProps {
    // 这里你应该列出 text, padding, margin, media 和 opacity 函数所期望的所有 props。
    // 例如，如果 text 函数期望一个 'fontSize' 的 prop，那么你应该在此处添加。
    fontSize?: string;
    // ... 其他的 props
}

export const Span = styled.span<SpanProps>`
    ${props => text(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
    ${props => opacity(props)}
`;
