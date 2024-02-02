type FormatMoneyOptions = {
    decimalPlaces?: number;
    locale?: string;
};

export const formatMoney = (number: number, options?: FormatMoneyOptions) => {
    try {
        const { decimalPlaces = 2, locale = "en-US" } = options || {};
        const formatter = new Intl.NumberFormat(locale, { minimumFractionDigits: decimalPlaces });
        return formatter.format(number);
    } catch (e) {
        return number.toString();
    }
};
