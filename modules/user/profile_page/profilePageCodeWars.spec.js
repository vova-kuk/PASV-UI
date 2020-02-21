import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE Codewars', () => {
  before(() => {
    LoginPage.login();
  });

  it('should go to profile Page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click CodeWars icon', () => {
    const element = ProfilePage.codeWarsIcon;
    element.click();
    browser.pause(1000)
  });

  it('should open CodeWars page', () => {
    const element = ProfilePage.codeWarsURL;
    const actual = 'https://www.codewars.com/users/ArtAm';
    expect(actual).equal(element);
  });

});