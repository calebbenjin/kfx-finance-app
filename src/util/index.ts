export const formatCurrency = (num: string) => {
  return `$${num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};
