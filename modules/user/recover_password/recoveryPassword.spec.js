import {expect} from 'chai';
import HomePage from '../../_PageObjects/HomePage';
import LoginPage from '../../_PageObjects/LoginPage';
import ResetPasswordPage from '../../_PageObjects/ResetPasswordPage';
import CheckEmailPage from '../../_PageObjects/CheckEmailPage';

describe('PASSWORD RECOVERY', () => {
    it('should open the Homepage', () => {
        HomePage.open();
    });
    it('should click Login button', () => {
        HomePage.loginLink.click();
    });
    it('should have correct User Login page title', () => {
        expect(LoginPage.h1.getText()).eq('User Login');
        browser.pause(1000);
    });

    it('should check if Forgot password link displayed', () => {
        expect(LoginPage.forgotPassword.getText()).eq('Forgot password?');
        browser.pause(1000);
    });

    it('should check if Forgot password link is clickable', () => {
        LoginPage.forgotPassword.click();
        browser.pause(1000);
    });

    it('should check if header of the `ResetPassword` page is correct `Reset your password`', () => {
        expect(ResetPasswordPage.h1.getText()).eq('Reset your password');
        browser.pause(1000);
    });

    // Miradil Omuraliev

    it('should check failed message `User not found` appears if entered email is not found in the database', () => {
        ResetPasswordPage.emailReset.setValue('asdadfdfs@mail.com');
        ResetPasswordPage.sendButton.click();
        browser.pause(2000)
        const actual = ResetPasswordPage.h4.getText();
        const expected = 'User not found';
        expect(actual).eq(expected);
        browser.pause(2000)
    });

    it('should check that user is left on the same page if entered email is not found in the database', () => {
        expect(ResetPasswordPage.h1.getText()).eq('Reset your password');
        browser.pause(2000);
    });

    it('should check that user gets redirected to `CheckMail` page if correct email was entered', () => {
        ResetPasswordPage.emailReset.setValue('ooopartner00@mail.ru');
        ResetPasswordPage.sendButton.click();
        browser.pause(2000)
        const actual = CheckEmailPage.h1Check.getText();
        const expected = 'Check your email for a link to reset your password';
        expect(actual).eq(expected);
        browser.pause(2000)
    });

});

