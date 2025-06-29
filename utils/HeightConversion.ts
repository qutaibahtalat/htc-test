export const cmToFtAndInch = (cm: number) => {
  const totalInches = cm / 2.54;
  const ft = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { ft, in: inches };
};

export const ftToCm = (ft: number, inch: number) => {
  return ft * 30.48 + inch * 2.54;
};
