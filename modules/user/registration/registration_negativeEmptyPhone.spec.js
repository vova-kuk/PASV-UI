import {expect} from 'chai';
import RegistrationPage from '../../_PageObjects/RegistrationPage';
import {newUser, pageRegister} from './registration_data';

describe('REGISTRATION PAGE NEGATIVE with empty field `Cell Phone Number`', () => {
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

    it('should button `Submit` will be Disable with empty First Name field', () => {
        const element = RegistrationPage.submitBtn;
        expect(element.isEnabled()).to.be.false;
    });

});

