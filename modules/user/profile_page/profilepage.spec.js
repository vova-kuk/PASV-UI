import { expect } from 'chai';
import ProfilePage from './ProfilePage';
import LoginPage from "../login/LoginPage";

describe('PROFILEPAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page', () => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Test Testov')
    });

    it('should choose click Create day report button', () => {
        const element = ProfilePage.createDayReportButton;
        element.click();
        browser.pause(5000);
    });
});
