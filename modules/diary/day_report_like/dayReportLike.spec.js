import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import ProfilePage from '../../_PageObjects/ProfilePage';
import DayReportLikePage from './DayReportLikePage';

describe('DAY_REPORT_LIKE_PAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page', () => {
        browser.pause(2000);
        expect(DayReportLikePage.h1ProfilePage.getText()).eq('Test Testov'); // to change DayReportLikePage to ProfilePage
    });

    it('should click Diary link', () => {
        DayReportLikePage.diaryLink.click();
        browser.pause(1000);
    });

    it('should have a correct page title', () => {
        const actual = DayReportLikePage.h1.getText();
        const expected = 'Daily reports';
        expect(actual).equal(expected);

    });

    it('should click Like button', () => {
        DayReportLikePage.submitBtn.click();
        browser.pause(2000);
    });

    it('should check Like button status', () => {
        DayReportLikePage.likeBtnStatus.click();
        browser.pause(2000);
    });
});
