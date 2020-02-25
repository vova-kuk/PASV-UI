import RegistrationPage from '../../_PageObjects/RegistrationPage';
import HomePage from '../../_PageObjects/HomePage';
import Notification from "../../_PageObjects/Notification";
import {userRegisteredData} from "../../_data/userAlreadyRegistered.data";

describe('REGISTRATION PAGE -- NEGATIVE with already registered user in the system', () => {
  before('should open Home Page, click button `Registration` and redirect to Registration Page',() => {
    HomePage.open();
    HomePage.registrationLink.click();
    browser.pause(1000);
  });

  it('should already registered user after submitting registration form get error notification', () => {
    RegistrationPage.registrationUserAlreadyExist();
    browser.waitUntil(() => {
      return Notification.title.getText() === userRegisteredData.notification}, 3000);
  });

});

