import { expect } from 'chai';
import LoginPage from '../../groups/_data/_page/LoginPage';
import {student} from  './../../_data/user.data';
import Menu from "../../groups/_data/_page/Menu";


describe('LOGIN PAGE NEGATIVE WITH VALID EMAIL AND EMPTY PASSWORD FIELD', () => {
    before(() => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        browser.waitUntil(() => Menu.h1.getText() === 'User Login',
          5000, 'expected header to be different after 3s');
    });

    it('should fill out email field', () => {
        LoginPage.emailInput.setValue(student.email);
    });

    it('should Login btn is disabled', () => {
        expect(LoginPage.submitBtn.isEnabled()).eq(false);
    });

});
