import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';

describe('LOGIN PAGE NEGATIVE with valid Email and empty Password field', () => {
    it('should open login page', () => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill out email field', () => {
        LoginPage.email.setValue('ooopartner00@mail.ru');
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
        browser.pause(1000);
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
        browser.pause(1000);
    });
});
