import LoanSlider from './LoanSlider';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from '@material-ui/core';
import expect from 'expect';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

const marks = [
    {
        value: 0,
        label: 'Minimum',
    },
    {
        value: 20,
        label: 'Maximum',
    },
];

const defaultTestProps = {
    title: 'This is a title',
    value: 10,
    min: 0,
    max: 20,
    step: 1,
    marks: marks,
};

describe('LoanSlider', () => {
    it('SNAPSHOT: should render expected content', () => {
        const defaultTree = renderer.create(<LoanSlider />);
        expect(defaultTree.toJSON()).toMatchSnapshot();
    });

    it('should render right content', () => {
        const wrapper = mount(<LoanSlider {...defaultTestProps} />);
        const title = wrapper.find(Typography);
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual('This is a title');
    });
});
