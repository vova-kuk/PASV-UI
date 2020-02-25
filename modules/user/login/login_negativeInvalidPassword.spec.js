import LoginPage from '../../_PageObjects/LoginPage';
import {student} from  './../../_data/user.data';
import Menu from "../../_PageObjects/Menu";
import Notification from "../../_PageObjects/Notification";


describe('LOGIN PAGE NEGATIVE with valid Email and invalid Password', () => {
    before(() => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        browser.waitUntil(() => {
            return Menu.h1.getText() === 'User Login'
        }, 5000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue(student.email);
    });

    it('should fill out password field', () => {
        LoginPage.passwordInput.setValue(123456);
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
    });

    it('should get negative login notification', () => {
        browser.waitUntil(() => $(Notification.fail).isDisplayed(), 60000);
    });
});
