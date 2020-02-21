import LoginPage from '../../_PageObjects/LoginPage';
import Logout from '../../_PageObjects/Logout';
import CreateDayReportPage from '../../_PageObjects/CreateDayReportPage';

describe('CREATE DAY REPORT', () => {
    before('should login as a student', () => {
        LoginPage.loginAsStudent();
    });

    it('should click on `Create day report` button', () => {
        CreateDayReportPage.createDayReport();
    });

    it('should check page header', () => {
        expect(CreateDayReportPage.header.getText()).eq('Create day report');
    });

    it('should check page description', () => {
        expect(CreateDayReportPage.marks.getText()).eq('Marks to your daily report');
    });

    it('should check a slogan', () => {
        expect(CreateDayReportPage.slogan.getText()).eq('© 2020 And what do you do for your career?');
    });

    it('should check `Save` button text', () => {
        expect(CreateDayReportPage.saveButton.getText()).eq('Save');
    });

    it('should fill out a day report form', () => {
        CreateDayReportPage.fillOutReport();
    });

    it('should check that `Save` button is active', () => {
        expect(CreateDayReportPage.saveButton.isEnabled()).be.true;
    });

    it('should click `Save` button', () => {
        CreateDayReportPage.saveButton.click();
    });

    it('should verify that a day report was created', () => {
        expect(CreateDayReportPage.newDayReport.getText()).eq('Write what is useful for self-development, learning, or practice you did today.');
    });

    after('should logout', () => {
        Logout.logout();
    });
});
