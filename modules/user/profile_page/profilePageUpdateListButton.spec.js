import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from "../../_PageObjects/LoginPage";

describe('PROFILE PAGE Update list button', () => {
  before(() => {
    LoginPage.login();
  });

  it('should go to profile Page', () => {
    browser.pause(5000);
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should choose click Update list button', () => {
    const element = ProfilePage.updateListButton;
    element.click();
    browser.pause(5000);
  });

  it('should have a correct notification', () => {
    const actual = $(ProfilePage.updateListNotification).getText();
    const expected = 'Completed challenges';
    expect(actual).equal(expected);
  });

});


