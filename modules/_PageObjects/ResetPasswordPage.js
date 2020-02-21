import AppPage from '../AppPage';

class ResetPasswordPage extends AppPage {

    get h1() {
        return $('//h1');
    }
    get invalidMsg() {
        return $('//div[contains(@class, "form")]//div[contains(text(), "Invalid")]');
    }
    get sendButton() {
        return $('//button[contains(text(),"Send password reset email")]');
    }
    get failedMsg(){
        return $('//h4[@class="notification-title"]');
    }
    get emailField(){
        return $('//input[@name="email"]');
    }
    get requiredMsg(){
        return $('//div[contains(@class, "form")]//span[contains(text(), "Required")]');
    }
    open(path) {
        super.open('https://stage.pasv.us/user/password/reset/request');
    }
}

export default new ResetPasswordPage();
