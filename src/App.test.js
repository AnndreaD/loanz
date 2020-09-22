import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
    it('SNAPSHOT: should render expected content', () => {
        const defaultTree = renderer.create(<App />);
        expect(defaultTree.toJSON()).toMatchSnapshot();
    });
});
