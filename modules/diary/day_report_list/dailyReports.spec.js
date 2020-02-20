import { expect } from 'chai';
import DailyReportsPage from '../../_PageObjects/DailyReportsPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('DAILY REPORTS PAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should choose click link Diary', () => {
        const element = DailyReportsPage.diaryBtn;
        element.click();
        browser.pause(3000);
    });

    it('should go to Daily reports page', () => {
        browser.pause(3000);
        expect(DailyReportsPage.h1.getText()).equal('Daily reports');
    });

});


