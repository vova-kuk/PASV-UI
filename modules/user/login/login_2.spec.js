import { expect } from 'chai';
import LoginPage from './LoginPage';

describe('LOGIN_2', () => {
    it('should open login page', () => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
        browser.pause(2000);
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
        });
});
