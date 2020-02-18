import AppPage from '../AppPage';


class LoginPage extends AppPage{

    get h1 () {
        return browser.$('//h1');
    }

    get email () {
        return browser.$('//input[@name="email"]');
    }

    get password () {
        return browser.$('//input[@name="password"]');
    }

    get forgotPassword() {
        return $('//div[@id="root"]//a[@qa="forgot-password-link"]');
    }

    get submitBtn () {
        return browser.$('//button[@type="submit"]');
    }

    login(){
        this.open();
        this.email.setValue('ooopartner00@mail.ru');
        this.password.setValue('123456');
        this.submitBtn.click();
        browser.pause(2000);
    }


    // Код loginAsStudent не актуален. Смотрите ниже loginRole(role)
    loginAsStudent(){
        this.open();
        this.email.setValue('studentofpasv@gmail.com');
        this.password.setValue('98765ytrewq$');
        this.submitBtn.click();
        browser.pause(2000);
    }

    loginRole(role) {
        this.open();
        this.email.setValue(role.email);
        this.password.setValue(role.password);
        this.submitBtn.click();
        browser.pause(2000);
    }

    open(){
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new LoginPage();

