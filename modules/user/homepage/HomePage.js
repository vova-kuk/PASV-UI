import AppPage from './../../AppPage';

class HomePage extends AppPage{
    get h1(){
        return $('//h1');
    }

    open(){
        super.open('https://stage.pasv.us/')
    }
}

export default new HomePage();

