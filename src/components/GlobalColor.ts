import { DefaultColor as Color } from "../styles/color";

export const GlobalColor = ({
    primary,
    primaryRGB,
    primaryG,
    success,
    successRGB,
    successG,
    danger,
    dangerRGB,
    dangerG,
    warning,
    warningRGB,
    warningG,
    info,
    infoRGB,
    infoG,
} = {}) => {
    if (primary) {
        Color.primary = primary;
    }
    if (primaryRGB) {
        Color.primaryRGB = primaryRGB;
    }
    if (primaryG) {
        Color.primaryG = primaryG;
    }
    if (success) {
        Color.success = success;
    }
    if (successRGB) {
        Color.successRGB = successRGB;
    }
    if (successG) {
        Color.successG = successG;
    }
    if (danger) {
        Color.danger = danger;
    }
    if (dangerRGB) {
        Color.dangerRGB = dangerRGB;
    }
    if (dangerG) {
        Color.dangerG = dangerG;
    }
    if (warning) {
        Color.warning = warning;
    }
    if (warningRGB) {
        Color.warningRGB = warningRGB;
    }
    if (warningG) {
        Color.warningG = warningG;
    }
    if (info) {
        Color.info = info;
    }
    if (infoRGB) {
        Color.infoRGB = infoRGB;
    }
    if (infoG) {
        Color.infoG = infoG;
    }
};
