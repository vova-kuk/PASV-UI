import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from "../../_PageObjects/LoginPage";
import CreateDayReportPage from "../../_PageObjects/CreateDayReportPage";

describe('PROFILE PAGE like', () => {
  before(() => {
    LoginPage.login();
    CreateDayReportPage.createDayReport();
    CreateDayReportPage.fillOutReport();
    ProfilePage.profile();
  });

  it('should go to profile Page', () => {
    browser.pause(5000);
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should choose click Like button', () => {
    const element = ProfilePage.likeButton;
    element.click();
    browser.pause(5000);
  });

  it('should have a correct notification', () => {
    const actual = $(ProfilePage.likeNotification).getText();
    const expected = 'Diary Like. Success';
    expect(actual).equal(expected);
  });

});
