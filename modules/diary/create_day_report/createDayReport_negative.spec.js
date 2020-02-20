import LoginPage from "../../_PageObjects/LoginPage";
import Logout from "../../_PageObjects/Logout";
import CreateDayReportPage from "../../_PageObjects/CreateDayReportPage";

describe('CREATE DAY REPORT', () => {
    before('Should login as STUDENT', () => {
        LoginPage.loginAsStudent();
    });
    it('Should click on Create Day Report button', () => {
        CreateDayReportPage.createDayReport();
    });
    it('Should check page Header', () => {
        expect(CreateDayReportPage.header.getText()).not.eq('ate day report');
    });
    it('Should check page Marks', () => {
        expect(CreateDayReportPage.marks.getText()).not.eq('rks to your daily report');
    });
    it('Should check Slogan', () => {
        expect(CreateDayReportPage.slogan.getText()).not.eq('2020 And what do you do for your career?');
    });
    it('Should check Save button text', () => {
        expect(CreateDayReportPage.saveButton.getText()).not.eq('save');
    });
    it('Should fill out Day Report, setting incorrect values', () => {
        CreateDayReportPage.fillOutReportNeg();
    });
    it('Should display Marks to your daily report Required warning', () => {
        CreateDayReportPage.marksRequired.isDisplayed();
    });
    it('Should display What is your morale Required warning', () => {
        CreateDayReportPage.moraleRequired.isDisplayed();
    });
    it('Should display Maximum 10 warning', () => {
        CreateDayReportPage.maxTen.isDisplayed();
    });
    it('Should display Must be 30 characters or more warning', () => {
        CreateDayReportPage.mustBeThirty.isDisplayed();
    });
    it('Should check that Save button is not active', () => {
        expect(CreateDayReportPage.saveButton.isEnabled()).be.not.true;
    });
    it('Should not be able to click Save button', () => {
        expect(CreateDayReportPage.saveButton.isClickable()).be.not.true;
    });
    after('Should logout', () => {
        Logout.logout();
    });
});
