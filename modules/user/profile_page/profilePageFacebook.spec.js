import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE Facebook', () => {
  before(() => {
    LoginPage.login();
    browser.pause(1500)
  });

  it('should go to `Profile` page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click Facebook icon', () => {
    const element = ProfilePage.facebookIcon;
    element.click();
    browser.pause(2000);
  });

  it('should check that user has been redirected to facebook', () => {
    browser.switchWindow('facebook.com');
    const element = browser.getUrl();
    expect(element).includes('facebook');
  });

});