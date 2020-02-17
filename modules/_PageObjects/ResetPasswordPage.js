import AppPage from '../AppPage';

class ResetPasswordPage extends AppPage {


    get h1() {
        return $('//h1');
    }

    open(path) {
        super.open('https://stage.pasv.us/user/password/reset/request');
    }
}

export default new ResetPasswordPage();