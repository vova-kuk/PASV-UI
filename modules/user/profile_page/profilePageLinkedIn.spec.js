import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE `LinkedIn` icon', () => {
  before(() => {
    LoginPage.login();
    browser.pause(3000)
  });

  it('should go to `Profile` page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click `LinkedIn` icon', () => {
    const element = ProfilePage.linkedInIcon;
    element.click();
    browser.pause(3000);
  });

//precondition must be: login to LinkedIn
  it('should check user has been redirected to LinkedIn', () => {
    browser.switchWindow('linkedin.com');
    const element = browser.getUrl();
    expect(element).includes('linkedin');
  });

});