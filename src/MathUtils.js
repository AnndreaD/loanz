export const getEstimatedTotal = (amount, years) => {
    return Math.ceil(getMonthlyFee(amount, years) * getNumberOfMonths(years));
};

export const getPercentageFeePrMonth = () => {
    return Math.pow(1 + 0.035, 1 / 12) - 1;
};

const getNumberOfMonths = (years) => {
    return years * 12;
};

const percent = 0.0035;

export const getMonthlyFee = (amount, years) => {
    return Math.ceil(amount * (percent / (1 - Math.pow(1 + percent, -years * 12))));
};
