import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE Facebook', () => {
  before(() => {
    LoginPage.login();
  });

  it('should go to profile Page', () => {
    browser.pause(2000);
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should choose click Facebook icon', () => {
    const element = ProfilePage.facebookIcon;
    element.click();
    browser.pause(5000);
  });

  it('should open Facebook page', () => {
    const element = ProfilePage.facebookURL;
    const actual = 'https://www.facebook.com/arthur.aminov.562';
    expect(actual).equal(element);
  });

});