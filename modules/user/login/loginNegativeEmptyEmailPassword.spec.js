import LoginPage from '../_page/LoginPage';
import Menu from "../../_page/Menu";

describe('LOGIN PAGE NEGATIVE WITH NOT CORRECT EMAIL ENTERING', () => {
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

