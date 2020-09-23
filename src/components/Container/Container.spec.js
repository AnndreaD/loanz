import Container from './Container';
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

describe('Container', () => {
    it('SNAPSHOT: should render expected content', () => {
        const defaultTree = renderer.create(<Container />);
        expect(defaultTree.toJSON()).toMatchSnapshot();
    });
});
