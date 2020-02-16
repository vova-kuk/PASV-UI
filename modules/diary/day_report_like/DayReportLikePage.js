import AppPage from './../../AppPage';

class DayReportLikePage extends AppPage{

    get h1ProfilePage () { // to get h1 from ProfilePage
        return browser.$('//h1');
    }

    get diaryLink () {
        return browser.$('//a[@qa="diary-link"]');
    }

    get h1 () {
        return browser.$('//h1');
    }

    get submitBtn () {
        return browser.$('//button[@qa="like-button"]');
    }

    get likeBtnStatus () {
        return browser.$('//button[@class="btn btn-outline-primary btn-sm disabled]');
    }



    open(){
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new DayReportLikePage();