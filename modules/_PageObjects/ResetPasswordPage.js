import AppPage from "../AppPage";

class ResetPasswordPage extends AppPage {


    get h1() {
        return $('//h1');
    }


// Miradil Omuraliev
    get emailReset(){
        return $('//input[@placeholder="Enter your email address"]');
    }
    get sendButton() {
        return $('//button[@class="btn btn-primary"]');
    }
    get h4(){
        return $('//h4[@class="notification-title"]');
    }


    open(path) {
        super.open('https://stage.pasv.us/user/password/reset/request');
    }
}

export default new ResetPasswordPage();