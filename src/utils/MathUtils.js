import { constants } from './constants';

export const getEstimatedTotal = (amount, years) => {
    return Math.ceil(getMonthlyFee(amount, years) * getNumberOfMonths(years));
};

export const getPercentageFeePrMonth = () => {
    return Math.pow(1 + constants.interest / 100, 1 / 12) - 1;
};

export const getNumberOfMonths = (years) => {
    return years * 12;
};

export const getMonthlyFee = (amount, years) => {
    const percent = constants.interest / 1000;
    return Math.ceil(amount * (percent / (1 - Math.pow(1 + percent, -years * 12))));
};

export function formatNumber(number) {
    return new Intl.NumberFormat('nb').format(number);
}
