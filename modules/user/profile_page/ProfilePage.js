import AppPage from './../../AppPage';

class ProfilePage extends AppPage{
    get h1(){
        return $('//h1');
    }

    open(){
        super.open('https://stage.pasv.us/user/5e1f1a337f1021003c5991b3')
    }
}

export default new ProfilePage();

