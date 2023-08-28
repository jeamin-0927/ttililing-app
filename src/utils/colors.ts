const colors = {
  gray000: "#FEFEFF",
  gray100: "#F6F7FA",
  gray200: "#EBECF5",
  gray300: "#D8DAE5",
  gray400: "#AAAEC1",
  gray500: "#8C90A0",
  gray600: "#72768A",
  gray700: "#545869",
  gray800: "#545869",
  gray900: "#202128",
  red: "#EE5C5C",
  green: "#52AB66",
  blue: "#525BAB",
};

export const opacity = (color: string, opacity = 1) => {
  return `${color}${Math.round(opacity * 255).toString(16)}`;
};

export default colors;
export type Colors = typeof colors;