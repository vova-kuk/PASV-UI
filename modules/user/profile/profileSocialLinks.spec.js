import Menu from '../../_PageObjects/Menu';
import ProfilePage from '../_page/ProfilePage';
import LoginPage from '../_page/LoginPage';
import LogoutPage from '../_page/LogoutPage';
import { data } from '../_data/profilePage.data';
import { student } from '../_data/user.data';

describe('SOCIAL NETWORKS INTEGRATION', () => {
  before(() => {
    LoginPage.login(student);
    browser.pause(1500);
  });

  it('should check that page is correct', () => {
    expect(Menu.h1.getText()).equal(data.student.name);
  });

  it('should click CodeWars icon', () => {
    const element = ProfilePage.codeWarsIcon;
    element.click();
  });

  it('should check user has been redirected to codewars', () => {
    browser.switchWindow(data.partialUrl.codewars);
    const element = browser.getUrl();
    expect(element).includes(data.partialUrl.codewars);
    browser.closeWindow();
  });

  it('should click Facebook icon', () => {
    browser.switchWindow(data.partialUrl.pasv);
    const element = ProfilePage.facebookIcon;
    element.click();
  });

  it('should check that user has been redirected to facebook', () => {
    browser.switchWindow(data.partialUrl.facebook);
    const element = browser.getUrl();
    expect(element).includes(data.partialUrl.facebook);
    browser.closeWindow();
  });

  it('should click LinkedIn icon', () => {
    browser.switchWindow(data.partialUrl.pasv);
    const element = ProfilePage.linkedInIcon;
    element.click();
  });

  it('should check user has been redirected to LinkedIn', () => {
    browser.switchWindow(data.partialUrl.linkedin);
    const element = browser.getUrl();
    expect(element).includes(data.partialUrl.linkedin);
    browser.closeWindow();
  });

  it('should logout', () => {
    browser.switchWindow(data.partialUrl.pasv);
  });

  after('should logout', () => {
    LogoutPage.logout();
  });
});
