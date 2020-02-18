import {expect} from 'chai';
import RegistrationPage from '../../_PageObjects/RegistrationPage';
import {newUser, pageRegister} from './registration_data';
import LoginPage from '../../_PageObjects/LoginPage';
import ProfilePage from '../../_PageObjects/ProfilePage';
import Logout from '../../_PageObjects/Logout';

describe('REGISTRATION PAGE POSITIVE', () => {
    it('should open registration page', () => {
        RegistrationPage.open();
        browser.pause(1000);
    });

    it('should have correct title', () => {
        const actual = RegistrationPage.title.getText();
        const expected = pageRegister.title;
        expect(actual).eq(expected);
    });

    it('should have correct heading', () => {
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
        RegistrationPage.email.setValue(newUser.email);
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
});

describe('CREATING USER CONFIRMATION', () => {
    it('should redirect to login page after submitting form', () => {
        const actual = browser.getUrl();
        const expected = 'https://stage.pasv.us/user/login';
        expect(actual).eq(expected);
        browser.pause(1000);
    });

    it('should login to the user account', () => {
        LoginPage.email.setValue(newUser.email);
        LoginPage.password.setValue(newUser.password);
        LoginPage.submitBtn.click();
        browser.pause(2000);
    });

    it('should verify heading of New User page', () => {
        const actual = ProfilePage.h1.getText();
        const expected = 'You are a new user';
        expect(actual).eq(expected);
    });

    it('should verify First and Last name of New User', () => {
        const actual = $('//li[@class="dropdown nav-item"]/a').getText();
        const expected = newUser.firstName + ' ' + newUser.lastName;
        expect(actual).eq(expected);
    });

    it('should verify text about confirmation email', () => {
        const actual = $('//span[@class="text-danger"]').getText();
        const expected = 'Also please confirm your email ' + newUser.email;
        expect(actual).eq(expected);
    });

    after('should user logout', () => {
        Logout.logout();
        browser.pause(2000);
    });
});
