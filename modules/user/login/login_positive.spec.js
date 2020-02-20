import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import ProfilePage from '../../_PageObjects/ProfilePage';

describe('LOGIN PAGE POSITIVE with valid Email and Password', () => {
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

    it('should fill out password field', () => {
        LoginPage.password.setValue('123456');
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
        browser.pause(1000);
    });

    it('should check bullits on password field', () => {
        LoginPage.bullits;
    });
    // it('should check h1 text', () => {
    //     expect(ProfilePage.h1.getText()).eq('Test Testov');
    //h4[@class='notification-title']
    // });
});
