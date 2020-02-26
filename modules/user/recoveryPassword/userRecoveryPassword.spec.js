import { expect } from 'chai';
import HomePage from '../../_page/HomePage';
import LoginPage from '../_page/LoginPage';
import Notification from '../../_page/Notification';
import ResetPasswordPage from '../_page/ResetPasswordPage';
import CheckEmailPage from '../../_page/CheckEmailPage';
import { testEmails, pagePswRecovery } from '../_data/recoveryPassword.data';
import AppPage from '../../_page/AppPage';

describe('USER PASSWORD RECOVERY', () => {
  before('open Login page from Homepage', () => {
    HomePage.open();
    HomePage.loginLink.click();
  });

  it('should check if Forgot password link displayed', () => {
    expect(LoginPage.forgotPasswordLink.getText()).eq(pagePswRecovery.forgotLinkTxt);
  });

  it('should click Forgot password link', () => {
    LoginPage.forgotPasswordLink.click();
  });

  it('should check if header page is correct', () => {
    expect(AppPage.h1.getText()).eq(pagePswRecovery.h1);
  });

  it('should check if the button is displayed', () => {
    expect(ResetPasswordPage.submitBtn.isDisplayed()).true;
  });

  it('should check if `Required` message is displayed for empty Email field', () => {
    $(ResetPasswordPage.emailInput).clearValue();
    expect(ResetPasswordPage.requiredMsg.isDisplayed()).true;
  });

  it('should check if the button is not clickable if email field is empty', () => {
    expect(ResetPasswordPage.submitBtn.isEnabled()).false;
  });

  it('should check if “Send password reset email” button is not clickable if email in incorrect format is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
    expect(ResetPasswordPage.submitBtn.isClickable()).false;
  });

  it('should check if “Invalid email address” warning is displayed if email in incorrect format is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
    expect(Notification.invalidMsg.isDisplayed()).true;
  });

  it('should check if “Send password reset email” button is clickable if email in correct format is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
    expect(ResetPasswordPage.submitBtn.isClickable()).true;
  });

  it('should check failed message `User not found` appears if entered email is not found in the database', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.notRegistered);
    ResetPasswordPage.submitBtn.click();
    expect(Notification.title.getText()).eq(pagePswRecovery.failedMsgTxt);
  });

  it('should check that user is left on the same page if entered email is not found in the database', () => {
    expect(ResetPasswordPage.h1.getText()).eq(pagePswRecovery.h1);
  });

  it('should check that user gets redirected to `CheckMail` page if correct email was entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
    ResetPasswordPage.submitBtn.click();
    expect(browser.getUrl()).eq(pagePswRecovery.urlRedirect);
  });

  it('should success message be displayed', () => {
    expect(CheckEmailPage.successMsg.isDisplayed()).true;
  });

  it('should h1 title be correct', () => {
    expect(AppPage.h1.getText()).eq(pagePswRecovery.h1Redirect);
  });

  it('should try again link be displayed', () => {
    expect(CheckEmailPage.tryAgainLink.isDisplayed()).true;
  });

  it('should check user gets redirected to `Forgot Password` page after `try again` link clicked', () => {
    CheckEmailPage.tryAgainLink.click();
    expect(browser.getUrl()).eq(pagePswRecovery.urlResetPsw);
  });
});
