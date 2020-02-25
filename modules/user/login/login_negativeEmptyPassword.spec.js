import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import {student} from  './../../_data/user.data';
import Menu from "../../_PageObjects/Menu";
import Notification from "../../_PageObjects/Notification";

describe('LOGIN PAGE NEGATIVE with valid Email and empty Password field', () => {
    it('should open login page', () => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'User Login'
        }, 3000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.email.setValue('ooopartner00@mail.ru');
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
        browser.pause(1000);
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
        browser.pause(1000);
    });
});
