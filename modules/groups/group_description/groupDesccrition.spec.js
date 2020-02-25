import Menu from '../../_PageObjects/Menu';
import LoginPage from '../../_PageObjects/LoginPage';
import LogoutPage from '../../_PageObjects/LogoutPage';
import GroupsPage from '../../_PageObjects/GroupsPage';
import GroupDescriptionPage from '../../_PageObjects/GroupDescriptionPage';
import { admin, student } from '../../_data/user.data';
import { data } from '../../_data/groupDescription.data';

describe('GROUP DESCRIPTION TAB', () => {
  before(() => {
    GroupsPage.createNewGroup(admin);
    LoginPage.login(student);
  });

  it('should click group button', () => {
    Menu.groupLink.click();
    browser.pause(1000);
  });

  it('should have a correct page title', () => {
    const actual = Menu.h1.getText();
    const expected = data.header;
    expect(actual).equal(expected);
  });

  it('should open recently created group', () => {
    GroupDescriptionPage.recentlyCreatedGroup.click();
    browser.waitUntil(() => GroupDescriptionPage.navigationBar.isDisplayed());
  });

  it('should Group have correct name', () => {
    const element = Menu.h1.getText();
    expect(element.includes(data.group.name)).true;
  });

  it('should open Group description tab', () => {
    GroupDescriptionPage.descriptionTabBtn.click();
    browser.waitUntil(() => Menu.p.isDisplayed());
  });

  it('should check Group description tab has opened', () => {
    const element = browser.getUrl();
    expect(element.includes(data.partialUrl)).true;
  });

  it('should Group have correct description', () => {
    const actual = Menu.p.getText();
    const expected = data.group.description;
    expect(actual).equal(expected);
  });

  after('it should logout', () => {
    LogoutPage.logout();
  });
});
