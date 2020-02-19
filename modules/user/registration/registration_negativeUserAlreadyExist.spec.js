import {expect} from 'chai';
import RegistrationPage from '../../_PageObjects/RegistrationPage';
import {newUser, pageRegister} from './registration_data';
import {userRegistered} from './userAlreadyRegister';
import HomePage from "../../_PageObjects/HomePage";

describe('REGISTRATION PAGE NEGATIVE with already registered user in the system', () => {
  before('should open Home Page, click button `Registration` ' +
    'and redirect to Registration Page',() => {
    HomePage.open();
    HomePage.registrationLink.click();
    browser.pause(1000);
  });

  it('should registration page has correct title', () => {
    const actual = RegistrationPage.title.getText();
    const expected = pageRegister.title;
    expect(actual).eq(expected);
  });

  it('should registration page has correct heading', () => {
    const actual = RegistrationPage.h1.getText();
    const expected = pageRegister.h1;
    expect(actual).eq(expected);
  });

  it('should have correct description', () => {
    const actual = RegistrationPage.dummyText.getText();
    const expected = pageRegister.dummyText;
    expect(actual).eq(expected);
  });

  it('should fill out First Name Field', () => {
    RegistrationPage.firstName.setValue(newUser.firstName);
  });


  it('should fill out Last Name Field', () => {
    RegistrationPage.lastName.setValue(newUser.lastName);
  });

  it('should fill out Cell Phone Number Field', () => {
    RegistrationPage.cellPhoneNumber.setValue(newUser.phone);
  });

  it('should fill out Email field', () => {
    RegistrationPage.email.setValue(userRegistered.email);
  });

  it('should fill out Password field', () => {
    RegistrationPage.password.setValue(newUser.password);
  });

  it('should fill out About field', () => {
    RegistrationPage.about.setValue(newUser.about);
  });

  it('should fill out My goals field', () => {
    RegistrationPage.myGoals.setValue(newUser.goals);
  });

  it('should choose English level from dropdown menu', () => {
    RegistrationPage.englishLevel.selectByVisibleText(newUser.englishLevel);
  });

  it('should click button Submit after filling all fields', () => {
    RegistrationPage.submitBtn.click();
    browser.pause(2000);
  });

  it('should have notification `User with this e-mail exists`', () => {
    const actual = RegistrationPage.userAlreadyExistNotification.getText();
    const expected = userRegistered.notification;
    expect(actual).eq(expected);
  });
});

