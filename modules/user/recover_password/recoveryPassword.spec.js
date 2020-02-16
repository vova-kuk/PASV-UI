import {expect} from 'chai';
import HomePage from '../homepage/HomePage';
import LoginPage from "../login/LoginPage";

describe('PASSWORD RECOVERY', () => {
    it('should open the Homepage', () => {
        HomePage.open();
    });
    it('should click Login button', () => {
        HomePage.loginLink.click();
    });
    it('should have correct User Login page title', () => {
        expect(LoginPage.h1.getText()).eq('User Login');
        browser.pause(1000);
    });

});

