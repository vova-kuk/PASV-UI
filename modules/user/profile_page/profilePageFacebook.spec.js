import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE Facebook', () => {
  before(() => {
    LoginPage.login();
    browser.pause(3000)
  });

  it('should go to `Profile` page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click Facebook icon', () => {
    const element = ProfilePage.facebookIcon;
    element.click();
    browser.pause(1000);
  });

  it('should open Facebook page', () => {
    const element = ProfilePage.facebookURL;
    const actual = 'https://www.facebook.com/arthur.aminov.562';
    expect(actual).equal(element);
  });

});