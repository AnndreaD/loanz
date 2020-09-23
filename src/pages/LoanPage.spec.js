import LoanPage from './LoanPage';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import '@testing-library/jest-dom';
import LoanSlider from '../components/LoanSlider/LoanSlider';

configure({ adapter: new Adapter() });

describe('LoanSlider', () => {
    it('SNAPSHOT: should render expected content', () => {
        const defaultTree = renderer.create(<LoanPage />);
        expect(defaultTree.toJSON()).toMatchSnapshot();
    });

    it('should render right content', () => {
        const wrapper = mount(<LoanPage />);
        const pageTitle = wrapper.find('h1');
        expect(pageTitle).toHaveLength(1);
        expect(pageTitle.text()).toEqual('Loan calculator');

        const totalPriceTag = wrapper.find('h3');
        expect(totalPriceTag).toHaveLength(1);
        expect(totalPriceTag.text()).toEqual('Estimated totalprice 1,032Kr');

        const pTags = wrapper.find('p');
        expect(pTags).toHaveLength(4);
        expect(pTags.at(0).text()).toEqual('How much do you wish to loan?');
        expect(pTags.at(1).text()).toEqual('Over how many years?');
        expect(pTags.at(2).text()).toEqual('Interest 3.5% ');
        expect(pTags.at(3).text()).toEqual('Monthly installments 86 Kr');

        const loanSliders = wrapper.find(LoanSlider);
        expect(loanSliders).toHaveLength(2);
    });

    it('should render new calculations', () => {
        const wrapper = mount(<LoanPage />);
        const numberInputs = wrapper.find('input');

        numberInputs.at(0).simulate('change', { target: { value: 400000 } });
        numberInputs.at(2).simulate('change', { target: { value: 5 } });

        expect(wrapper.find('h3').text()).toEqual('Estimated totalprice 444,180Kr');
        expect(wrapper.find('p').at(3).text()).toEqual('Monthly installments 7,403 Kr');
    });
});
