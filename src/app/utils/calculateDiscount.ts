export const calculateDiscount = (currentPrice: string, originalPrice: string): number => {
  const current = parseFloat(currentPrice.replace("$", ""));
  const original = parseFloat(originalPrice.replace("$", ""));

  if (!original || original <= current) return 0;

  const discount = ((original - current) / original) * 100;
  return Math.round(discount);
};
