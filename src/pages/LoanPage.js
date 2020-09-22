import React, { useState } from 'react';
import LoanSlider from '../components/LoanSlider/LoanSlider';
import Container from '../components/Container/Container';
import { getEstimatedTotal, getMonthlyFee } from '../utils/MathUtils';
import { texts } from '../messages/Messages';
const marksAmount = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10000000,
        label: '10 000 000',
    },
];
const marksyears = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 20,
        label: '20',
    },
];

const LoanPage = () => {
    const [years, setYears] = useState(1);
    const [amount, setAmount] = useState(1000);
    return (
        <>
            <Container title={'Lånekalkulator'}>
                <LoanSlider
                    title={'Hvor mye ønsker du å låne?'}
                    value={amount}
                    onChange={(value) => setAmount(value)}
                    step={1000}
                    max={10000000}
                    min={1000}
                    marks={marksAmount}
                />
                <LoanSlider
                    title={'Over hvor mange år?'}
                    value={years}
                    onChange={(years) => setYears(years)}
                    step={1}
                    max={20}
                    min={1}
                    marks={marksyears}
                />
                <h3>
                    {texts.totalprice}
                    {getEstimatedTotal(amount, years)} {texts.currency}
                </h3>
                <p>{texts.interest}</p>
                <p>
                    {texts.mothly} {getMonthlyFee(amount, years)} {texts.currency}
                </p>
            </Container>
        </>
    );
};

export default LoanPage;
