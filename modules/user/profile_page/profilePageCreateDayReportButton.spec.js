import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE `Create day report` button', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to `Profile` Page', () => {
        expect(ProfilePage.h1.getText()).equal('Test Testov');
    });

    it('should click `Create day report` button', () => {
        const element = ProfilePage.createDayReportBtn;
        element.click();
    });

    it('should have header `Create day report`', () => {
        expect(ProfilePage.h1.getText()).equal('Create day report');
    });
});


