import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';
import MenuPage from "../../_PageObjects/MenuPage";
import LogoutPage from "../../_PageObjects/LogoutPage";

describe('PROFILE PAGE Create day report button', () => {
    before(() => {
        LoginPage.loginAsStudent();
    });

    it('should go to Profile Page', () => {
        ProfilePage.goToProfilePage();
    });

    it('should check Create day report button exists and clickable', () => {
        browser.waitUntil(() => ProfilePage.createDayReportBtn.isDisplayed());
        const actual = ProfilePage.createDayReportBtn.isClickable();
        expect(actual).true;
    });

    it('should click Create day report button', () => {
        const element = ProfilePage.createDayReportBtn;
        element.click();
    });

    it('should have correct header', () => {
        expect(MenuPage.header.getText()).equal('Create day report');
    });

    after('should logout', () => {
        LogoutPage.logout();
    });

});


