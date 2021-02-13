/*
 * 获得渐变
 * */
import {DefaultColor as Color} from "../../styles/color";

export const getGradient = bg => {
    let gs = '',
        ge = '';
    switch (bg) {
        case 'p':
            gs = Color.primary;
            ge = Color.primaryG;
            break;
        case 's':
            gs = Color.success;
            ge = Color.successG;
            break;
        case 'd':
            gs = Color.danger;
            ge = Color.dangerG;
            break;
        case 'w':
            gs = Color.warning;
            ge = Color.warningG;
            break;
        case 'i':
            gs = Color.info;
            ge = Color.infoG;
            break;
        case 'ff':
            gs = Color.ff;
            ge = Color.ffG;
            break;
        case 'fe':
            gs = Color.fe;
            ge = Color.feG;
            break;
        case 'fc':
            gs = Color.fc;
            ge = Color.fcG;
            break;
        case 'f9':
            gs = Color.f9;
            ge = Color.f9G;
            break;
        case 'f6':
            gs = Color.f6;
            ge = Color.f6G;
            break;
        case 'f3':
            gs = Color.f3;
            ge = Color.f3G;
            break;
        default:
            gs = Color.ff;
            ge = Color.ffG;
            break;
    }
    return [gs, ge];
};
