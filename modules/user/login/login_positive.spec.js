import {expect}  from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import HomePage from '../../_PageObjects/HomePage';
import {student} from  './../../_data/user.data';
import Menu from "../../_PageObjects/Menu";

describe('LOGIN PAGE --POSITIVE', () => {
    before(() => {
        HomePage.open();
        HomePage.loginLink.click();
    });

    it('should wait correct Login Page title', () => {
        browser.waitUntil(() => {
            return LoginPage.h1.getText() === 'User Login'
        }, 3000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue(student.email);
    });

    it('should fill out password field', () => {
        LoginPage.passwordInput.setValue(student.password);
    });

    it('should check password field hide with bullets', () => {
        const actual = LoginPage.passwordInput.getAttribute('type');
        const expected = 'password';
        expect(actual).eq(expected);
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
    });

    it('should check transfer to Profile Page', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'Student PASV'
        }, 3000, 'expected header to be different after 3s');
    });

    it('should get positive login notification', () => {
        const actual = LoginPage.notification.getText();
        //const expected = 'Auth success'; - there should be this message !!!
        const expected = 'Completed challenges';
        expect(actual).eq(expected, 'Why "Completed challenges" ?');
    });

});
