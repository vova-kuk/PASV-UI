import { expect } from 'chai';
import HomePage from '../homepage/HomePage';
import RecoveryPassword from "./RecoveryPassword";

describe('PASSWORD RECOVERY', () => {
    it('should open the homepage', () => {
        HomePage.open();
    });
    it('should click Login button', () => {
        RecoveryPassword.loginButton.click();
    });
    it('should have correct User Login page title', () => {
        expect(RecoveryPassword.h1.getText()).eq('User Login');
        browser.pause(1000);
    });

});

