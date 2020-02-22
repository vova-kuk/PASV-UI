import { expect } from 'chai';
import { data } from "../../_data/profilePage.data";
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from "../../_PageObjects/LoginPage";
import Menu from "../../_PageObjects/Menu";
import Notification from "../../_PageObjects/Notification";
import LogoutPage from "../../_PageObjects/LogoutPage";

describe('PROFILE PAGE DAILY REPORTS LIKE BUTTON TESTING', () => {
  before(() => {
    LoginPage.loginAsStudent();
    //create one report
  });

  it('should check profile page is loaded and correct', () => {
    const element = Menu.h1;
    browser.waitUntil(() => element.isDisplayed());
    expect(element.getText()).equal(data.student.name);
  });

  it('should click Like button', () => {
    const element = ProfilePage.likeBtn;
    if (element.isExisting()) {
      element.click();
      browser.pause(1500);
    } else {
      LogoutPage.logout();
    }
  });

  it('should have a correct notification', () => {
    const element = $(Notification.title);
    const actual = element.getText();
    const expected = data.notification;
    expect(actual).equal(expected);
  });

  it('should logout', () => {
    LogoutPage.logout();
  })
});
