import AppPage from '../AppPage';


class LoginPage extends AppPage{



    get emailInput () {
        return browser.$('//input[@name="email"]');
    }

    get passwordInput () {
        return browser.$('//input[@name="password"]');
    }

    get forgotPasswordLink() {
        return browser.$('//a[@qa="forgot-password-link"]');
    }

    get submitBtn () {
        return browser.$('//button[@type="submit"]');
    }

    get bullets () {
        return browser.$('//input[@name="password"][@autocomplete="current-password" ]');
    }

    get notification() {
        return browser.$('//h4[@class="notification-title"]');
    }

    login(role) {
        this.open();
        this.emailInput.setValue(role.email);
        this.passwordInput.setValue(role.password);
        this.submitBtn.click();
        browser.pause(2000);
    }

    open(){
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new LoginPage();
