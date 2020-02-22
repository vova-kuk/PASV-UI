import LoginPage from "../../_PageObjects/LoginPage";
import LogoutPage from "../../_PageObjects/LogoutPage";
import CreateDayReportPage from "../../_PageObjects/CreateDayReportPage";

describe('CREATE DAY REPORT -- NEGATIVE', () => {
    before('should login as STUDENT', () => {
        LoginPage.loginAsStudent();
        CreateDayReportPage.diaryLink.click();
        CreateDayReportPage.createDayReportBtn.click();
    });

    it('should verify Create Day Report PAGE HEADER is CORRECT', () => {
        expect(CreateDayReportPage.header.getText()).not.eq('ate day report');
    });

    it('should verify COMMON TITLE TO ALL CHECK MARKS', () => {
        expect(CreateDayReportPage.checkMarksTitle.getText()).not.eq('What is your morale?');
    });

    it('should display REQUIRED WARNING if NO CHECK MARK SELECTED ', () => {
        CreateDayReportPage.requiredWarningForCheckMarks.isDisplayed();
    });

    it('should display REQUIRED WARNING if USER MORALE NOT SELECTED', () => {
        CreateDayReportPage.requiredWarningForMorale.isDisplayed();
    });

    it('should verify HOW MANY HOURS USER STUDIED TODAY input', () => {
        CreateDayReportPage.hoursStudiedInputNeg();
    });

    it('should display MAX 10 HOURS WARNING', () => {
        CreateDayReportPage.maxTenWarning.isDisplayed();
    });

    it('should display MUST BE 30 CHARACTERS OR MORE WARNING', () => {
        CreateDayReportPage.mustBeThirtyWarning.isDisplayed();
    });

    it('should verify SAVE BUTTON NOT ACTIVE ', () => {
        expect(CreateDayReportPage.saveBtn.isEnabled()).be.not.true;
    });

    it('should verify SAVE BUTTON TEXT', () => {
        expect(CreateDayReportPage.saveBtn.getText()).not.eq('save');
    });

    it('should verify SAVE BUTTON CLICKABLE', () => {
        expect(CreateDayReportPage.saveBtn.isClickable()).be.not.true;
    });

    after('should LOGOUT', () => {
        LogoutPage.logout();
    });
});
