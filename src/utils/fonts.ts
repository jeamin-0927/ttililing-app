const weightN2S = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Heavy",
};
type WeightN2S = typeof weightN2S;
type WeightN2SKeys = keyof WeightN2S;

const fonts = (weight: WeightN2SKeys, fontFamily: string = "SUIT") => {
  return `${fontFamily}-${weightN2S[weight]}`;
};

export default fonts;