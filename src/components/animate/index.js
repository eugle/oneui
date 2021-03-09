import {keyframes, css} from 'styled-components';

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const position = 50;
const fadeBottom = keyframes`
   0% { margin-top: ${position}px;opacity:0;}
   100% { margin-top: 0px;opacity:1;}
`;

const fadeTop = keyframes`
   0% { margin-top: -${position}px;opacity:0;}
   100% { margin-top: 0px;opacity:1;}
`;

const fadeRight = keyframes`
   0% { margin-left: ${position}px;opacity:0;}
   100% { margin-left: 0px;opacity:1;}
`;

const fadeLeft = keyframes`
   0% { margin-right: ${position}px;opacity:0;}
   100% { margin-right: 0px;opacity:1;}
`;

export const animate = ({a}) => {
    if (a && a instanceof Array) {
        const [name, time, infinite] = a || [];
        if (typeof name === 'string' && typeof time === "number") {
            let current = '';
            if (name === "r") {
                const limit = infinite && typeof infinite === "number" ? infinite : 'infinite';
                current = css`animation: ${rotate} ${time}s linear ${limit};`;
            }
            if (name === "fb") {
                current = css`animation: ${fadeBottom} ${time}s linear;`;
            }
            if (name === "ft") {
                current = css`animation: ${fadeTop} ${time}s linear;`;
            }
            if (name === "fl") {
                current = css`animation: ${fadeLeft} ${time}s linear;`;
            }
            if (name === "fr") {
                current = css`animation: ${fadeRight} ${time}s linear;`;
            }
            return current;
        }
    }
}
