
import AppPage from './../../AppPage';

class RecoveryPassword extends AppPage{

    get h1(){
        return $('//h1');
    }
    get loginButton() {
        return $('//a[@qa="login-link"]')
    }

    open(){
        super.open('https://stage.pasv.us/')
    }
}

export default new RecoveryPassword();