import { expect } from 'chai';
import DailyReportsPage from '../../_PageObjects/DailyReportsPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('DAILY REPORTS PAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should click `Diary` button', () => {
        const element = DailyReportsPage.diaryBtn;
        element.click();
    });

    it('should go to `Daily reports` page', () => {
        expect(DailyReportsPage.h1.getText()).equal('Daily reports');
    });

});


