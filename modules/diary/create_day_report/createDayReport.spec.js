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
        expect(CreateDayReportPage.header.getText()).eq('Create day report');
    });
    it('Should check page Marks', () => {
        expect(CreateDayReportPage.marks.getText()).eq('Marks to your daily report');
    });
    it('Should check Slogan', () => {
        expect(CreateDayReportPage.slogan.getText()).eq('© 2020 And what do you do for your career?');
    });
    it('Should check Save button text', () => {
        expect(CreateDayReportPage.saveButton.getText()).eq('Save');
    });
    it('Should fill out Day Report', () => {
        CreateDayReportPage.fillOutReport();
    });
    it('Should check that Save button is active', () => {
        expect(CreateDayReportPage.saveButton.isEnabled()).be.true;
    });
    it('Should click Save button', () => {
        CreateDayReportPage.saveButton.click();
    });
    it('Should verify day report was created', () => {
        expect(CreateDayReportPage.newDayReport.getText()).eq('Write what is useful for self-development, learning, or practice you did today.');
    });
    after('Should logout', () => {
        Logout.logout();
    });
});
