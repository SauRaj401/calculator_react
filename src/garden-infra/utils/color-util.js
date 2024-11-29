import md5 from "react-native-md5";

import { getRandomIndex } from "./random-util";

const COLOR_PALETTE = [
  "#393b79",
  "#5254a3",
  "#6b6ecf",
  "#9c9ede",
  "#637939",
  "#8ca252",
  "#b5cf6b",
  "#cedb9c",
  "#8c6d31",
  "#bd9e39",
  "#e7ba52",
  "#e7cb94",
  "#843c39",
  "#ad494a",
  "#d6616b",
  "#e7969c",
  "#7b4173",
  "#a55194",
  "#ce6dbd",
  "#de9ed6",
];

export function getColorPalette(index) {
  if (index && index < COLOR_PALETTE.length) return COLOR_PALETTE[index];
  return COLOR_PALETTE;
}

export function getRandomColor() {
  let colorIndex = getRandomIndex(COLOR_PALETTE.length);
  return COLOR_PALETTE[colorIndex];
}

export function getStringColorByCalc(str) {
  let str_md5v = md5.str_md5(str);

  let hash = 0;
  for (let i = 0; i < str_md5v.length; i++) {
    hash = str_md5v.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}

let copyColorPalette = [...COLOR_PALETTE];
const colorPaletteUseMap = {};

export function getStringColor(str) {
  let fnColor = colorPaletteUseMap[str];
  if (fnColor !== undefined) {
    return fnColor;
  } else {
    if (copyColorPalette.length > 0) {
      let colorIndex = getRandomIndex(copyColorPalette.length);
      fnColor = copyColorPalette[colorIndex];
      colorPaletteUseMap[str] = fnColor;
      copyColorPalette.splice(colorIndex, 1);
      return fnColor;
    }
  }
  return getStringColorByCalc(str);
}
