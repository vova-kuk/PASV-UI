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

  /* precondition must be: login to LinkedIn
  it('should open LinkedIn page', () => {
    const element = ProfilePage.linkedInURLL;
    const actual = 'https://www.linkedin.com/in/arthur-aminov-14081b18b/';
    expect(actual).equal(element);
  });
*/

});