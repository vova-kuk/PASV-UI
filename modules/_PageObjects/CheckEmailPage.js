import AppPage from "../AppPage";

class CheckEmailPage extends AppPage {

    get h1Check(){
        return $('//h1[contains(text(),"Check your email for a link to reset your password")]');
    }

    open(path) {
        super.open('https://stage.pasv.us/user/password/reset/mailed');
    }
}

export default new CheckEmailPage();