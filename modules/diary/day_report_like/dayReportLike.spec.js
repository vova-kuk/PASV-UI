import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import ProfilePage from '../../_PageObjects/ProfilePage';
import DayReportLikePage from './DayReportLikePage';
import CreateDayReportPage from "../../_PageObjects/CreateDayReportPage";

describe('DAY_REPORT_LIKE_PAGE', () => {
    before(() => {
        LoginPage.login();
        DayReportLikePage.diaryLink.click();
        browser.pause(500);
    });

    it('should have a correct page title', () => {
        const actual = DayReportLikePage.h1.getText();
        const expected = 'Daily reports';
        expect(actual).equal(expected);
    });

    it('should click Like button', () => {
        DayReportLikePage.createDayReportBtn.click();
        browser.pause(500);
        CreateDayReportPage.fillOutReport();
        CreateDayReportPage.saveButton.click();
        browser.pause(500);
        expect(DayReportLikePage.submitBtn.getText()).equal("Like 👍");
        DayReportLikePage.submitBtn.click();
        browser.pause(500);
        expect(DayReportLikePage.submitBtn.getText()).equal("I like this 👍1");
    });

    it('should Like button be disabled', () => {
        expect(DayReportLikePage.submitBtn.isEnabled()).equal(false);
    });

});
