import { expect } from 'chai';
import Menu from "../../_PageObjects/Menu";
import DailyReportsPage from '../../_PageObjects/DailyReportsPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('DAILY REPORTS PAGE TESTING', () => {
    before(() => {
        LoginPage.loginAsStudent();
    });

    it('should click Diary button', () => {
        const element = DailyReportsPage.diaryBtn;
        element.click();
    });

    it('should go to Daily reports page', () => {
        browser.waitUntil(() => Menu.header.isDisplayed());
        expect(Menu.header.getText()).equal('Daily reports');
    });

    it('should have Create Day Report button', () => {
        expect(DailyReportsPage.createBtn).exist;
    });

    it('should paragraph have right description', () => {
        const actual = Menu.paragraph.getText();
        expect(actual).eq('This list contains only new day reports.');
    });

    it('should Create Day Report button be clickable', () => {
        const actual = DailyReportsPage.createBtn.isClickable();
        expect(actual).to.be.true;
    });

});


