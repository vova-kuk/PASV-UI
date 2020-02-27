import { expect } from 'chai';
import HomePage from '../../_page/HomePage';
import LoginPage from '../_page/LoginPage';
import Notification from '../../_page/Notification';
import ResetPasswordPage from '../_page/ResetPasswordPage';
import CheckEmailPage from '../../_page/CheckEmailPage';
import { testEmails, pagePswRecovery } from '../_data/recoveryPassword.data';
import Menu from '../../_page/Menu';

describe('USER PASSWORD RECOVERY', () => {
  before('open Login page from Homepage', () => {
    HomePage.open();
    HomePage.loginLink.click();
    browser.waitUntil(() => Menu.h1.getText() === 'User Login', 2000);
  });

  it('should check if Forgot password link is displayed', () => {
    expect(LoginPage.forgotPasswordLink.getText()).eq(pagePswRecovery.forgotLinkTxt);
  });

  it('should click Forgot password link and user redirected to Reset your password page', () => {
    LoginPage.forgotPasswordLink.click();
    browser.waitUntil(() => ResetPasswordPage.h1.getText() === pagePswRecovery.h1, 500);
  });

  it('should check if the button `Send password reset email` is displayed', () => {
    expect(ResetPasswordPage.submitBtn.isDisplayed()).true;
  });

  it('should check if `Required` message is displayed for empty Email field', () => {
    $(ResetPasswordPage.emailInput).clearValue();
    browser.waitUntil(() => ResetPasswordPage.requiredMsg.isDisplayed(), 100);
  });

  it('should check if the button is not clickable if email field is empty', () => {
    expect(ResetPasswordPage.submitBtn.isEnabled()).false;
  });

  it('should check if `Send password reset email` button is not clickable if incorrect email is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
    browser.waitUntil(() => !ResetPasswordPage.submitBtn.isClickable(), 500);
  });

  it('should check if `Invalid email address` warning is displayed if incorrect email is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
    browser.waitUntil(() => Notification.invalidMsg.isDisplayed(), 500);
  });

  it('should check if “Send password reset email” button is clickable if correct email is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
    browser.waitUntil(() => ResetPasswordPage.submitBtn.isClickable(), 500);
  });

  it('should check failed message `User not found` appears if entered email is not found in the database', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.notRegistered);
    ResetPasswordPage.submitBtn.click();
    browser.waitUntil(() => Notification.title.getText() === pagePswRecovery.failedMsgTxt, 500);
  });

  it('should check that user is left on the same page if entered email is not found in the database', () => {
    expect(ResetPasswordPage.h1.getText()).eq(pagePswRecovery.h1);
  });

  it('should check that user gets redirected to `CheckMail` page if correct email was entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
    ResetPasswordPage.submitBtn.click();
    browser.waitUntil(() => browser.getUrl() === pagePswRecovery.urlRedirect, 2000);
  });

  it('should success message be displayed', () => {
    expect(CheckEmailPage.successMsg.isDisplayed()).true;
  });

  it('should h1 title be correct', () => {
    expect(CheckEmailPage.h1.getText()).eq(pagePswRecovery.h1Redirect);
  });

  it('should try again link be displayed', () => {
    expect(CheckEmailPage.tryAgainLink.isDisplayed()).true;
  });

  it('should check user gets redirected to `Forgot Password` page after `try again` link clicked', () => {
    CheckEmailPage.tryAgainLink.click();
    browser.waitUntil(() => browser.getUrl() === pagePswRecovery.urlResetPsw, 1000);
  });
});
