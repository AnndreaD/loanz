// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import expect from 'expect';
import '@testing-library/jest-dom/extend-expect';

expect.extend({
    toRender(received, number, ofInstances) {
        const nInstances = received.findAllByType(ofInstances).length;
        const pass = nInstances === number;
        if (pass) {
            return {
                message: () => `expected number of instances not to be:\n${number}\nreceived:\n${nInstances}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected number of instances to be:\n${number}\nreceived:\n${nInstances}`,
                pass: false,
            };
        }
    },
});
