import AppPage from '../AppPage';

class ResetPasswordPage extends AppPage {


    get h1() {
        return browser.$('//h1');
    }
    get warningMessage() {

        return $('//div[@class="invalid-feedback"]');

    }


// Miradil Omuraliev
    get emailReset(){
        return browser.$('//input[@placeholder="Enter your email address"]');
    }
    /*get sendButton() {
        return $('//button[@class="btn btn-primary"]');
    }
     */
    get sendButton() {
        return browser.$('//button[contains(text(),"Send password reset email")]');
    }
    get h4(){
        return browser.$('//h4[@class="notification-title"]');
    }
    get email(){
        return browser.$('//input[@name="email"]');
    }
    get requiredMsg(){
        return browser.$('//div[contains(@class, "form")]//span[contains(text(), "Required")]');
    }

    open(path) {
        super.open('https://stage.pasv.us/user/password/reset/request');
    }
}

export default new ResetPasswordPage();
