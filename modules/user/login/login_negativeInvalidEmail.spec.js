import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import {student} from  './../../_data/user.data';
import Menu from "../../_PageObjects/Menu";
import Notification from "../../_PageObjects/Notification";

describe('LOGIN PAGE NEGATIVE with invalid Email and valid Password', () => {
    before(() => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'User Login'
        }, 5000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue('aabbcc@email.com');
    });

    it('should fill out password field', () => {
        LoginPage.passwordInput.setValue(student.password);
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
    });

    it('should get negative login notification', () => {
        browser.waitUntil(() => $(Notification.fail).isDisplayed(), 100000);
    });
});
