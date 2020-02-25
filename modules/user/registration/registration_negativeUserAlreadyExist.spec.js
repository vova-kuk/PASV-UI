import RegistrationPage from '../../_PageObjects/RegistrationPage';
import HomePage from '../../_PageObjects/HomePage';

describe('REGISTRATION PAGE -- NEGATIVE with already registered user in the system', () => {
  before('should open Home Page, click button `Registration` ' +
    'and redirect to Registration Page',() => {
    HomePage.open();
    HomePage.registrationLink.click();
    browser.pause(1000);
  });

  it('should already registered user fill out all fields and submit registration form ' +
    'and get notification `User with this e-mail exists`', () => {
    RegistrationPage.registrationUserAlreadyExist();
  });

});

