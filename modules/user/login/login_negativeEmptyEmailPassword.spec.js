import LoginPage from '../../_PageObjects/LoginPage';
import {student} from  './../../_data/user.data';
import Menu from "../../_PageObjects/Menu";
import Notification from "../../_PageObjects/Notification";

describe('LOGIN PAGE NEGATIVE with not correct email entering', () => {
    before(() => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        browser.waitUntil(() => Menu.h1.getText() === 'User Login',
          3000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue('absd@mail');
    });


    it('should get negative login notification', () => {
        browser.waitUntil(() => $(LoginPage.invalidEmailNotification).isDisplayed(), 5000);
    });
});
