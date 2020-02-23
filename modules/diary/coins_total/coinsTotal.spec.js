import {expect} from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import CreateDayReportPage from '../../_PageObjects/CreateDayReportPage';
import {admin, student} from '../../_data/user.data';
import Logout from '../../_PageObjects/LogoutPage';
import DiaryPage from '../../_PageObjects/DiaryPage';
import ProfilePage from '../../_PageObjects/ProfilePage';


let beforeCoinAmount = 0;
let newCoinAmount = 0;
let topCoinAmount = 0;

describe('SAVE COINS AMOUNT BEFORE ', () => {
    before(() => {
        LoginPage.login(student);
        DiaryPage.goToDiaryPage();
        CreateDayReportPage.createDayReport();
        CreateDayReportPage.fillOutReport();
        CreateDayReportPage.saveButton.click();
    });

    it('should save current amount of user coins from the Profile page', () => {
        ProfilePage.goToProfilePage();
        browser.refresh();
        beforeCoinAmount = ProfilePage.coinTotal.getText();
        topCoinAmount = ProfilePage.coinTotalTopRight.getText();
        expect(topCoinAmount).equal(beforeCoinAmount);
    });

    it('should logout as user', () => {
        Logout.logout();
    });
});

describe('APPROVE DAY REPORT BY ADMIN', () => {

    before(() => {
        LoginPage.login(admin);
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
        LoginPage.login(student);
        ProfilePage.goToProfilePage();
    });

    it('should verify new coin amount not equal coin amount before', () => {
        browser.refresh();
        topCoinAmount = ProfilePage.coinTotalTopRight.getText();
        newCoinAmount = ProfilePage.coinTotal.getText();
        expect(newCoinAmount).to.not.equal(beforeCoinAmount);
    });

    it('should verify new coin amount equal to amount of coin before + 1', () => {
        expect(Number.parseInt(newCoinAmount)).equal(Number.parseInt(beforeCoinAmount)+1);
    });

    it('should verify amount of coin from the top left corner is the match to the amount ' +
        'of coin under the header on the Profile page', () => {
        expect(topCoinAmount).equal(newCoinAmount);
    });
});

