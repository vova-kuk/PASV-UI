import LoginPage from "../../_PageObjects/LoginPage";
import CreateDayReportPage from "../../_PageObjects/CreateDayReportPage";

describe('CREATE DAY REPORT', () => {
    // currently using what is in LoginPage
    before('Should login as STUDENT', () => {
        LoginPage.open();
        LoginPage.login();
    });
    it('Should click on create day report button', () => {
        CreateDayReportPage.createDayReport();
    });
    it('Should check page elements', () => {
        expect(CreateDayReportPage.header.getText()).to.contain('Create day report');
        expect(CreateDayReportPage.marks.getText()).to.contain('Marks to your daily report');
        expect(CreateDayReportPage.slogan.getText()).to.contain('© 2020 And what do you do for your career?');
        expect(CreateDayReportPage.saveButton.getText()).to.contain('Save');
    });
    it('Should fill out day report', () => {
        CreateDayReportPage.fillOutReport();
        browser.pause(1000);
    });
    it('Should verify day report was created', () => {
        expect(CreateDayReportPage.newDayReport.getText()).to.contain('Write what is useful for self-development, learning, or practice you did today.');
    });
    //Will add once there is LogoutPage
    // after('Should logout', () => {
    //     Login_PO.logoutFromApp();
    // });
});
