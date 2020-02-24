import {expect} from 'chai';
import HomePage from '../../_PageObjects/HomePage';
import LoginPage from '../../_PageObjects/LoginPage';
import Notification from '../../_PageObjects/Notification';
import ResetPasswordPage from '../../_PageObjects/ResetPasswordPage';
import CheckEmailPage from '../../_PageObjects/CheckEmailPage';
import { testEmails, pagePswRecovery } from "../../_data/recoveryPassword.data";

describe('PASSWORD RECOVERY', () => {
  before('open Homepage', () => {
    HomePage.open();
  });

  it('should click Login button', () => {
    HomePage.loginLink.click();
  });

  it('should check if Forgot password link displayed', () => {
    expect(LoginPage.forgotPasswordLink.getText()).eq(pagePswRecovery.forgotLinkTxt);
    browser.pause(200);
  });

  it('should check if Forgot password link is clickable', () => {
    LoginPage.forgotPasswordLink.click();
    browser.pause(200);
  });

  it('should check if header of the `ResetPassword` page is correct `Reset your password`', () => {
    expect(ResetPasswordPage.h1.getText()).eq(pagePswRecovery.h1);
     browser.pause(200);
  });

  it('should check if the button is displayed', () => {
    expect(ResetPasswordPage.sendBtn.isDisplayed()).true;
  });

  it('should check if `Required` message is displayed if email field is empty', () => {
    $(ResetPasswordPage.emailInput).clearValue();
    expect(ResetPasswordPage.requiredMsg.isDisplayed()).true;
  });

  it('should check if the button is not clickable if email field is empty', () => {
    expect(ResetPasswordPage.sendBtn.isEnabled()).false;
    browser.pause(500);
  });

  it('should check if “Send password reset email” button is not clickable if email in incorrect format is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
    expect(ResetPasswordPage.sendBtn.isClickable()).false;
    browser.pause(1000);
  });

  it('should check if “Invalid email address” warning is displayed if email in incorrect format is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.incorrectFormat);
    expect(Notification.invalidMsg.isDisplayed()).true;
  });

  it('should check if “Send password reset email” button is clickable if email in correct format is entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
    expect(ResetPasswordPage.sendBtn.isClickable()).true;
     browser.pause(500);
  });

  it('should check failed message `User not found` appears if entered email is not found in the database', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.notRegistered);
    ResetPasswordPage.sendBtn.click();
    browser.pause(1000);
    expect(Notification.failedMsg.getText()).eq(pagePswRecovery.failedMsgTxt);
  });

  it('should check that user is left on the same page if entered email is not found in the database', () => {
    expect(ResetPasswordPage.h1.getText()).eq(pagePswRecovery.h1);
  });

  it('should check that user gets redirected to `CheckMail` page if correct email was entered', () => {
    ResetPasswordPage.emailInput.setValue(testEmails.correctFormat);
    ResetPasswordPage.sendBtn.click();
     browser.pause(2000);
    expect(browser.getUrl()).eq(pagePswRecovery.urlRedirect);
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
    browser.pause(2000);
    expect(browser.getUrl()).eq(pagePswRecovery.urlResetPsw);
  });

});
