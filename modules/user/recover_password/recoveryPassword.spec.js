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

 // Anna Strik

    it('should check if the button is displayed', () => {
        expect($(ResetPasswordPage.sendButton).isDisplayed()).to.be.true;
    });

    it('should check if `Required` message is displayed if email field is empty', () => {
        $(ResetPasswordPage.email).clearValue();
        expect($(ResetPasswordPage.requiredMsg).isDisplayed()).to.be.true;
    });

    it('should check if the button is not clickable if email field is empty', () => {
        expect($(ResetPasswordPage.sendButton).isEnabled()).to.be.false;
        browser.pause(1000);
    });

    // Miradil Omuraliev

    it('should check failed message `User not found` appears if entered email is not found in the database', () => {
        ResetPasswordPage.emailReset.setValue('asdadfdfs@mail.com');
        ResetPasswordPage.sendButton.click();
        expect(ResetPasswordPage.h4.getText()).eq('User not found');
    });

    it('should check that user is left on the same page if entered email is not found in the database', () => {
        expect(ResetPasswordPage.h1.getText()).eq('Reset your password');
    });

    it('should check that user gets redirected to `CheckMail` page if correct email was entered', () => {
        ResetPasswordPage.emailReset.setValue('ooopartner00@mail.ru');
        ResetPasswordPage.sendButton.click();
        browser.pause(500);
        expect(CheckEmailPage.h1Check.getText()).eq('Check your email for a link to reset your password');
    });

    it('should success message be displayed', () => {
        expect(CheckEmailPage.successMessage.isDisplayed()).true;
    });

    it('should h1 title be correct', () => {
        expect(CheckEmailPage.h1Check.getText()).eq('Check your email for a link to reset your password');
    });

    it('should try again link be displayed', () => {
        expect(CheckEmailPage.tryAgainLink.isDisplayed()).true;
    });

});

