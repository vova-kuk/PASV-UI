import RegistrationPage from '../../_PageObjects/RegistrationPage';
import HomePage from '../../_PageObjects/HomePage';
import Menu from '../../_PageObjects/Menu';
import Notification from "../../_PageObjects/Notification";
import {urlData} from "../../_data/url.data";
import {newUserData, pageRegisterData, successfulNotificationData} from '../../_data/registration.data';


describe('REGISTRATION PAGE -- POSITIVE', () => {
  before('should open Home Page, click button `Registration` and redirect to Registration Page',() => {
    HomePage.open();
    HomePage.registrationLink.click();
    browser.pause(1000);
  });

  it('should registration page has correct heading', () => {
    const actual = Menu.h1.getText();
    const expected = pageRegisterData.h1;
    expect(actual).eq(expected);
  });

  it('should have correct warning text', () => {
    const actual = Menu.p.getText();
    const expected = pageRegisterData.warningText;
    expect(actual).eq(expected);
  });

  it('should button `Submit` will be disabled by default', () => {
    const element = RegistrationPage.submitBtn;
    expect(element.isEnabled()).to.be.false;
  });

  it('should fill out `First Name` Field', () => {
    RegistrationPage.firstNameInput.setValue(newUserData.firstName);
  });

  it('should fill out `Last Name` Field', () => {
    RegistrationPage.lastNameInput.setValue(newUserData.lastName);
  });

  it('should fill out `Cell Phone Number` Field', () => {
    RegistrationPage.cellPhoneNumberInput.setValue(newUserData.phone);
  });

  it('should fill out `Email` field', () => {
    RegistrationPage.emailInput.setValue(newUserData.email);
  });

  it('should button `Submit` will be disabled without filling out all required fields', () => {
    const element = RegistrationPage.submitBtn;
    expect(element.isEnabled()).to.be.false;
  });

  it('should fill out Password field', () => {
    RegistrationPage.passwordInput.setValue(newUserData.password);
  });

  it('should fill out About field', () => {
    RegistrationPage.aboutInput.setValue(newUserData.about);
  });

  it('should fill out My goals field', () => {
    RegistrationPage.myGoalsInput.setValue(newUserData.goals);
  });

  it('should button `Submit` will be disabled without filling out last required field', () => {
    const element = RegistrationPage.submitBtn;
    expect(element.isEnabled()).to.be.false;
  });

  it('should choose English level from dropdown menu', () => {
    RegistrationPage.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
  });

  it('should button `Submit` will be enabled when filling out all required fields', () => {
    const element = RegistrationPage.submitBtn;
    expect(element.isEnabled()).to.be.true;
  });

  it('should click button Submit after filling all fields', () => {
    RegistrationPage.submitBtn.click();
  });

  it('should wait until redirect to login page after submitting form', () => {
    browser.waitUntil(() => {
      return browser.getUrl() === urlData.loginUrl}, 3000);
  });

  it('should get successful notification about user registration in the system', () => {
    const actual = Notification.title.getText();
    const expected = successfulNotificationData.successfulNotification;
    expect(actual).eq(expected);
  });

});


