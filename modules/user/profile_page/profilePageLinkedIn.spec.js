import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';
import MenuPage from "../../_PageObjects/MenuPage";

describe('PROFILE PAGE LinkedIn icon', () => {
  before(() => {
    LoginPage.login();
  });

  // it('should go to Profile page', () => {
  //   browser.waitUntil(() => Me)
  //   expect(ProfilePage.h1.getText()).equal('Test Testov');
  // });

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