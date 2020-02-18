import {expect} from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import CreateDayReportPage from '../../_PageObjects/CreateDayReportPage';
import {admin, student} from '../../user/login/loginRole_data';
import Logout from '../../_PageObjects/Logout';
import DiaryPage from '../../_PageObjects/DiaryPage';
import ProfilePage from '../../_PageObjects/ProfilePage';


let beforeCoinAmmount = 0;
let newCoinAmmount = 0;

describe('SAVE COINS AMOUNT BEFORE ', () => {
    before(() => {
        LoginPage.loginRole(student);
        DiaryPage.goToDiaryPage();
        CreateDayReportPage.createDayReport();
        CreateDayReportPage.fillOutReport();
    });

    it('should save current amount of user coins from Profile page', () => {
        ProfilePage.goToProfilePage();
        beforeCoinAmmount = ProfilePage.coinTotal.getText()
    });

    it('should logout as user', () => {
        Logout.logout();
    });
});

describe('APPROVE DAY REPORT BY ADMIN', () => {

    before(() => {
        LoginPage.loginRole(admin);
        DiaryPage.goToDiaryPage();
    });

    it('should approve day report', () => {
        DiaryPage.approveBtn.click();
    });

    it('should logout as admin', () => {
        Logout.logout();
    });

});

describe('VERIFY TOTAL COINS AMOUNT AFTER ADMIN APPROVED REPORT', () => {
    before(() => {
        LoginPage.loginRole(student);
        ProfilePage.goToProfilePage();
    });

    it('should verify new coin amount not equal coin amount before', () => {
        newCoinAmmount = ProfilePage.coinTotal.getText();
        expect(newCoinAmmount).to.not.equal(beforeCoinAmmount);
    });

    it('should verify new coin amount equal to amount of coin before + 1', () => {
        expect(Number.parseInt(newCoinAmmount)).equal(Number.parseInt(beforeCoinAmmount)+1);
    });

});