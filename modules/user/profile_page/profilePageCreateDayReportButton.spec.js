import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';
import Menu from '../../_PageObjects/Menu';
import LogoutPage from '../../_PageObjects/LogoutPage';
import { data } from '../../_data/profilePage.data';

describe('PROFILE PAGE CREATE DAILY REPORT BUTTON TESTING', () => {
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
    expect(Menu.h1.getText()).equal(data.dayReport.h1);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
