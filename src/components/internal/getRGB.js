/*
 * 获得RGB
 * */
import color from "../basic/color";
import { DefaultColor as Color } from "../../styles/color";

export const getRGB = c => {
  if (c && typeof c === "string") {
    return Object.keys(color).includes(c) ? Color[`${c}RGB`] : "0,0,0";
  } else {
    return "0,0,0";
  }
};
