import AppPage from '../AppPage';


class LoginPage extends AppPage{

    get h1 () {
        return browser.$('//h1');
    }

    get emailField () {
        return browser.$('//input[@name="email"]');
    }

    get passwordField () {
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
        this.email.setValue(role.email);
        this.password.setValue(role.password);
        this.submitBtn.click();
        browser.waitUntil(() => this.h1.isDisplayed());
    }

    open(){
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new LoginPage();
