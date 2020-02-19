import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE Create day report button', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page', () => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).equal('Test Testov');
    });

    it('should choose click Create day report button', () => {
        const element = ProfilePage.createDayReportButton;
        element.click();
        browser.pause(5000);
    });

    //change to Create day report Page selector
    it('shoudl have header Create day report', () => {
        expect(ProfilePage.h1.getText()).equal('Create day report');
    });
});


