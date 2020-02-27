import AppPage from '../../_page/AppPage';
import { newUserData } from '../_data/registration.data';
import { userRegisteredData } from '../_data/userAlreadyRegistered.data';

class RegistrationPage extends AppPage {
  get p() {
    return $('//p');
  }

  get firstNameInput() {
    return $('//form//input[@name="firstName"]');
  }

  get lastNameInput() {
    return $('//form//input[@name="lastName"]');
  }

  get cellPhoneNumberInput() {
    return $('//form//input[@name="phone"]');
  }

  get emailInput() {
    return $('//form//input[@name="email"]');
  }

  get passwordInput() {
    return $('//form//input[@name="password"]');
  }

  get aboutInput() {
    return $('//form//textarea[@name="about"]');
  }

  get myGoalsInput() {
    return $('//form//textarea[@name="goals"]');
  }

  get englishLevelOption() {
    return $('//form//select[@name="englishLevel"]');
  }

  get submitBtn() {
    return $('//form//button[@type="submit"]');
  }

  registrationNewUser() {
    this.firstNameInput.setValue(newUserData.firstName);
    this.lastNameInput.setValue(newUserData.lastName);
    this.cellPhoneNumberInput.setValue(newUserData.phone);
    this.emailInput.setValue(newUserData.email);
    this.passwordInput.setValue(newUserData.password);
    this.aboutInput.setValue(newUserData.about);
    this.myGoalsInput.setValue(newUserData.goals);
    this.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
    this.submitBtn.click();
  }

  registrationUserAlreadyExist() {
    this.firstNameInput.setValue(newUserData.firstName);
    this.lastNameInput.setValue(newUserData.lastName);
    this.cellPhoneNumberInput.setValue(newUserData.phone);
    this.emailInput.setValue(userRegisteredData.email);
    this.passwordInput.setValue(newUserData.password);
    this.aboutInput.setValue(newUserData.about);
    this.myGoalsInput.setValue(newUserData.goals);
    this.englishLevelOption.selectByVisibleText(newUserData.englishLevel);
    this.submitBtn.click();
  }
}

export default new RegistrationPage();
