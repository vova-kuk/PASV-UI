import AppPage from './../../AppPage';

class HomePage extends AppPage {
    get h1() {
        return $('//h1');
    }

    get title() {
        return $('//div[@class="container"]//span[@id="site-name"]');
    }

    get loginLink() {
        return $('//a[@qa="login-link"]')
    }


    open() {
        super.open('https://stage.pasv.us/')
    }
}

export default new HomePage();

