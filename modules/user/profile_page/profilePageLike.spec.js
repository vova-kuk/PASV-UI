import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from "../../_PageObjects/LoginPage";
import CreateDayReportPage from "../../_PageObjects/CreateDayReportPage";

describe('PROFILE PAGE `like` button', () => {
  before(() => {
    LoginPage.login();
    CreateDayReportPage.createDayReport();
    CreateDayReportPage.fillOutReport();
    ProfilePage.profile();
  });

  it('should go to `Profile` page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click `Like` button', () => {
    const element = ProfilePage.likeBtn;
    element.click();
    browser.pause(3000);
  });

  it('should have a correct notification', () => {
    const actual = $(ProfilePage.likeNotification).getText();
    const expected = 'Diary Like. Success';
    expect(actual).equal(expected);
  });

});
