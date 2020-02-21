import LoginPage from '../../_PageObjects/LoginPage';
import Logout from '../../_PageObjects/LogoutPage';
import CreateDayReportPage from '../../_PageObjects/CreateDayReportPage';

describe('CREATE DAY REPORT NEGATIVE', () => {
    before('should login as a student', () => {
        LoginPage.loginAsStudent();
    });

    it('should click on Create Day Report button', () => {
        CreateDayReportPage.createDayReport();
    });

    it('should check page Header', () => {
        expect(CreateDayReportPage.header.getText()).not.eq('ate day report');
    });

    it('should check page Marks', () => {
        expect(CreateDayReportPage.marks.getText()).not.eq('rks to your daily report');
    });

    it('should check Slogan', () => {
        expect(CreateDayReportPage.slogan.getText()).not.eq('2020 And what do you do for your career?');
    });

    it('should check Save button text', () => {
        expect(CreateDayReportPage.saveButton.getText()).not.eq('save');
    });

    it('should fill out Day Report, setting incorrect values', () => {
        CreateDayReportPage.fillOutReportNeg();
    });

    it('should display Marks to your daily report Required warning', () => {
        CreateDayReportPage.marksRequired.isDisplayed();
    });

    it('should display What is your morale Required warning', () => {
        CreateDayReportPage.moraleRequired.isDisplayed();
    });

    it('should display Maximum 10 warning', () => {
        CreateDayReportPage.maxTen.isDisplayed();
    });

    it('should display Must be 30 characters or more warning', () => {
        CreateDayReportPage.mustBeThirty.isDisplayed();
    });

    it('should check that Save button is not active', () => {
        expect(CreateDayReportPage.saveButton.isEnabled()).be.not.true;
    });

    it('should not be able to click Save button', () => {
        expect(CreateDayReportPage.saveButton.isClickable()).be.not.true;
    });

    after('should logout', () => {
        Logout.logout();
    });
});
