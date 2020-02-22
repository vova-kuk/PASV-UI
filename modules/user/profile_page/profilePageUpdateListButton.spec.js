import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';
import Menu from "../../_PageObjects/Menu";

describe('PROFILE PAGE `Update list` button', () => {
  before(() => {
    LoginPage.login();
  });

  it('should go to `Profile` page', () => {
    expect(ProfilePage.h1.getText()).equal('Test Testov');
  });

  it('should click `Update list` button', () => {
    const element = ProfilePage.updateListBtn;
    element.click();
    browser.pause(3000);
  });

  it('should have a correct notification', () => {
    const actual = $(ProfilePage.updateListNotification).getText();
    const expected = 'Completed challenges';
    expect(actual).equal(expected);
  });

});


