import Menu from '../../_PageObjects/Menu';
import Notification from '../../_PageObjects/Notification';
import LoginPage from '../../_PageObjects/LoginPage';
import LogoutPage from '../../_PageObjects/LogoutPage';
import CreateDayReportPage from '../../_PageObjects/CreateDayReportPage';
import DailyReportsPage from '../../_PageObjects/DailyReportsPageList';
import { data } from '../../_data/dailyReportsList.data';
import { student } from '../../_data/user.data';

describe('DAILY REPORTS PAGE TESTING', () => {
  before(() => {
    LoginPage.login(student);
    for (let i = 0; i < 3; i++) {
      CreateDayReportPage.createNewDayReport();
    }
  });

  it('should click Diary button', () => {
    const element = DailyReportsPage.diaryBtn;
    element.click();
  });

  it('should show success notification', () => {
    browser.waitUntil(() => Notification.title.isDisplayed());
    const element = Notification.success;
    expect(element.isDisplayed()).true;
  });

  it('should check notification is correct', () => {
    const element = Notification.title.getText();
    expect(element.includes(data.notificationText));
  });

  it('should check that page has correct description', () => {
    expect(Menu.h1.getText()).equal(data.h1);
  });

  it('should check Create Day Report button is displayed', () => {
    expect(DailyReportsPage.createBtn.isDisplayed()).true;
  });

  it('should check paragraph contains correct description', () => {
    const actual = Menu.p.getText();
    expect(actual).eq(data.p);
  });

  it('should Create Day Report button be clickable', () => {
    const actual = DailyReportsPage.createBtn.isClickable();
    expect(actual).true;
  });

  it('should check 3 most recent reports exist in the list', () => {
    DailyReportsPage.checkLast3Reports();
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
