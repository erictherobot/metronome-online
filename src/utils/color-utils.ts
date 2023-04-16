export const getContrastYIQ = (rgb: string) => {
  const [r, g, b] = rgb
    .substring(4, rgb.length - 1)
    .split(",")
    .map(Number);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};
