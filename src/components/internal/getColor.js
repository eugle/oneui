/*
 * 获得颜色
 * c,o,over:是否激活颜色
 * */
import {DefaultColor as Color} from '../../styles/color';

export const getColor = (c, o, over) => {
    //判断透明色
    const opacity = o || o === 0 ? (o > 9 ? 1 : o === 0 ? 0 : '.' + o) : 1;

    //如果是 0,0,0 并指定透明度，直接组合返回;
    if (c && String(c).includes(',')) {
        c = `rgba(${c},${opacity})`
    }

    //如果是 16进制 并指定透明度，不处理直接返回，输出提示;
    if (c && String(c).includes('#') && (o === 0 || o)) {
        console.log('想要背景透明度生效必须指定RGB颜色: 0,0,0');
    }

    //如果是默认单或双数值颜色，判断并组合;
    if (c && c.length <= 2) {
        switch (c) {
            case 'p':
                c = o || o === 0 ? `rgba(${Color.primaryRGB},${opacity})` : over ? Color.primaryG : Color.primary;
                break;
            case 's':
                c = o || o === 0 ? `rgba(${Color.successRGB},${opacity})` : over ? Color.successG : Color.success;
                break;
            case 'd':
                c = o || o === 0 ? `rgba(${Color.dangerRGB},${opacity})` : over ? Color.dangerG : Color.danger;
                break;
            case 'w':
                c = o || o === 0 ? `rgba(${Color.warningRGB},${opacity})` : over ? Color.warningG : Color.warning;
                break;
            case 'i':
                c = o || o === 0 ? `rgba(${Color.infoRGB},${opacity})` : over ? Color.infoG : Color.info;
                break;
            case 'ff':
                c = o || o === 0 ? `rgba(${Color.ffRGB},${opacity})` : over ? Color.ffG : Color.ff;
                break;
            case 'fe':
                c = o || o === 0 ? `rgba(${Color.feRGB},${opacity})` : over ? Color.feG : Color.fe;
                break;
            case 'fc':
                c = o || o === 0 ? `rgba(${Color.fcRGB},${opacity})` : over ? Color.fcG : Color.fc;
                break;
            case 'f9':
                c = o || o === 0 ? `rgba(${Color.f9RGB},${opacity})` : over ? Color.f9G : Color.f9;
                break;
            case 'f6':
                c = o || o === 0 ? `rgba(${Color.f6RGB},${opacity})` : over ? Color.f6G : Color.f6;
                break;
            case 'f3':
                c = o || o === 0 ? `rgba(${Color.f3RGB},${opacity})` : over ? Color.f3G : Color.f3;
                break;
            case 'f0':
                c = o || o === 0 ? `rgba(${Color.f0RGB},${opacity})` : over ? Color.f0G : Color.f0;
                break;
            case 'bg':
                c = o || o === 0 ? `rgba(${Color.bgRGB},${opacity})` : over ? Color.bgG : Color.bg;
                break;
            case 'bp':
                c = o || o === 0 ? `rgba(${Color.bpRGB},${opacity})` : over ? Color.bpG : Color.bp;
                break;
            case 'bs':
                c = o || o === 0 ? `rgba(${Color.bsRGB},${opacity})` : over ? Color.bsG : Color.bs;
                break;
            case 'bd':
                c = o || o === 0 ? `rgba(${Color.bdRGB},${opacity})` : over ? Color.bdG : Color.bd;
                break;
            case 'bw':
                c = o || o === 0 ? `rgba(${Color.bwRGB},${opacity})` : over ? Color.bwG : Color.bw;
                break;
            case 'bi':
                c = o || o === 0 ? `rgba(${Color.biRGB},${opacity})` : over ? Color.biG : Color.bi;
                break;
            default:
                c = o || o === 0 ? `rgba(${Color.ffRGB},${opacity})` : '';
                break;
        }
    }
    return c;
};
