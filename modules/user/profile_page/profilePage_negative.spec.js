import { expect } from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('PROFILE PAGE (negative)', () => {
  before(() => {
    LoginPage.login();
  });

  it('should go to profile Page', () => {
    browser.pause(5000);
    expect(ProfilePage.h1.getText()).not.equal('Vasya Testov');
  });

});


