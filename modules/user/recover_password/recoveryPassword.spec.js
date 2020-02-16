import {expect} from 'chai';
import HomePage from '../homepage/HomePage';
import LoginPage from "../login/LoginPage";
import ResetPasswordPage from "./ResetPasswordPage";

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

    it('should check if header of the “ResetPassword” page is correct “Reset your password”', () => {
        expect(ResetPasswordPage.h1.getText()).eq('Reset your password');
        browser.pause(1000);
    });

});

