import Menu from "../../_PageObjects/Menu";
import DailyReportsPage from '../../_PageObjects/DailyReportsPage';
import LoginPage from '../../_PageObjects/LoginPage';
import Notification from "../../_PageObjects/Notification";
import { data } from "../../_data/dailyReportsList.data";
import { student } from "../../_data/user.data";


describe('DAILY REPORTS PAGE TESTING', () => {
    before(() => {
        LoginPage.login(student);
    });

    it('should click Diary button', () => {
        const element = DailyReportsPage.diaryBtn;
        element.click();
    });

    it('should show success notification', () => {
        const element = Notification.success;
        expect(element.isDisplayed()).true;
    });

    it('should check notification is correct', () => {
        const element = Notification.title.getText();
        expect(element.includes(data.notificationText));
    });

    it('should go to Daily reports page', () => {
        browser.waitUntil(() => Menu.h1.isDisplayed());
        expect(Menu.h1.getText()).equal(data.h1);
    });

    it('should have Create Day Report button', () => {
        expect(DailyReportsPage.createBtn).exist;
    });

    it('should paragraph have right description', () => {
        const actual = Menu.p.getText();
        expect(actual).eq(data.p);
    });

    it('should Create Day Report button be clickable', () => {
        const actual = DailyReportsPage.createBtn.isClickable();
        expect(actual).to.be.true;
    });

    it('should check 3 reports in the list exist', () => {
        DailyReportsPage.checkLast3Reports();
    });

});


