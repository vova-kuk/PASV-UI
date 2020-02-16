import AppPage from './../../AppPage';

class RegistrationPage extends AppPage {

    open() {
        super.open('https://stage.pasv.us/user/register');
    }

    get title() {
        return $('//span[@id="site-name"]');
    }

    get h1() {
        return $('//h1');
    }

    get dummyText() {
        return $('//p');
    }

    get firstName() {
        return $('//form//input[@name="firstName"]');
    }

    get lastName() {
        return $('//form//input[@name="lastName"]');
    }

    get cellPhoneNumber() {
        return $('//form//input[@name="phone"]');
    }

    get email() {
        return $('//form//input[@name="email"]');
    }

    get password() {
        return $('//form//input[@name="password"]');
    }

    get about() {
        return $('//form//textarea[@name="about"]');
    }

    get myGoals() {
        return $('//form//textarea[@name="goals"]');
    }

    get englishLevel() {
        return $('//form//select[@name="englishLevel"]');
    }

    get submitBtn() {
        return $('//form//button[@type="submit"]');
    }

    get userAlreadyExistNotification() {
        return $('//h4[@class="notification-title"]');
    }

}

export default new RegistrationPage();