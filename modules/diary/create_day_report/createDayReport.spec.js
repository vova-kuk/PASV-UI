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
        CreateDayReportPage.checkPageElements();
    });
    it('Should fill out day report', () => {
        CreateDayReportPage.fillOutReport();
        browser.pause(1000);
    });
    it('Should verify day report was created', () => {
        CreateDayReportPage.verifyNewReport();
    });
    //Will add once there is LogoutPage
    // after('Should logout', () => {
    //     Login_PO.logoutFromApp();
    // });
});
