import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import '@testing-library/jest-dom';
import { getMonthlyFee, formatNumber, getPercentageFeePrMonth, getEstimatedTotal, getNumberOfMonths } from './MathUtils';

configure({ adapter: new Adapter() });

const years1 = 10;
const amount1 = 1000000;

const years2 = 7;
const amount2 = 7200000;

const years3 = 3;
const amount3 = 2500000;

describe('MathUtil functions', () => {
    it('should give correct total amount', () => {
        const result1 = getEstimatedTotal(amount1, years1);
        expect(result1).toBe(1226400);

        const result2 = getEstimatedTotal(amount2, years2);
        expect(result2).toBe(8322720);

        const result3 = getEstimatedTotal(amount3, years3);
        expect(result3).toBe(2665188);
    });

    it('should give correct percentage fee pr month', () => {
        const result1 = getPercentageFeePrMonth();
        expect(result1).toBe(0.002870898719076642);
    });

    it('should give correct number of months based on year', () => {
        const result1 = getNumberOfMonths(years1);
        expect(result1).toBe(120);

        const result2 = getNumberOfMonths(years2);
        expect(result2).toBe(84);

        const result3 = getNumberOfMonths(years3);
        expect(result3).toBe(36);
    });

    it('should give correct monthly amount', () => {
        const result1 = getMonthlyFee(amount1, years1);
        expect(result1).toBe(10220);

        const result2 = getMonthlyFee(amount2, years2);
        expect(result2).toBe(99080);

        const result3 = getMonthlyFee(amount3, years3);
        expect(result3).toBe(74033);
    });

    it('should give correct format of number', () => {
        const result1 = formatNumber(10);
        expect(result1).toBe('10');

        const result2 = formatNumber(100);
        expect(result2).toBe('100');

        const result3 = formatNumber(10000);
        expect(result3).toBe('10,000');

        const result4 = formatNumber(100000);
        expect(result4).toBe('100,000');

        const result5 = formatNumber(1000000);
        expect(result5).toBe('1,000,000');
    });
});
