const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: "#F1F1F1",
};

export const opacity = (color: string, opacity = 1) => {
  return `${color}${Math.round(opacity * 255).toString(16)}`;
};

export default colors;
export type Colors = typeof colors;