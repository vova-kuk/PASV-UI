import Menu from '../../_PageObjects/Menu';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';
import LogoutPage from '../../_PageObjects/LogoutPage';
import Notification from '../../_PageObjects/Notification';
import { data } from '../../_data/profilePage.data';
import { student } from '../../_data/user.data';
import CreateDayReportPage from '../../_PageObjects/CreateDayReportPage';

describe('PROFILE PAGE DAILY REPORTS LIKE BUTTON TESTING', () => {
  before(() => {
    LoginPage.login(student);
    CreateDayReportPage.createNewDayReport();
    browser.pause(1000);
    ProfilePage.goToProfilePage();

  });

  it('should check profile page is loaded and correct', () => {
    const element = Menu.h1;
    browser.waitUntil(() => element.isDisplayed());
    expect(element.getText()).equal(data.student.name);
  });

  it('should click Like button', () => {
    const element = ProfilePage.likeBtn;
    element.click();
    browser.pause(1200);
  });
  it('should have a correct notification', () => {
    const actual = Notification.title.getText();
    const expected = data.notification;
    expect(actual).equal(expected);
  });
  it('should logout', () => {
    LogoutPage.logout();
  });
});
