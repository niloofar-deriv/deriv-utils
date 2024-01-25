const formatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 });

export const formatMoney = (number: number) => formatter.format(number);
