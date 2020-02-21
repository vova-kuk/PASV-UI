import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE Codewars', () => {
  before(() => {
    LoginPage.login();
    browser.pause(2000)
  });

  it('should go to profile Page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click CodeWars icon', () => {
    const element = ProfilePage.codeWarsIcon;
    element.click();
    browser.pause(1000);
  });

  it('should check user has been redirected to codewars', () => {
    browser.switchWindow('codewars');
    const element = browser.getUrl();
    expect(element).includes('codewars');
  });

});