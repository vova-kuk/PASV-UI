import AppPage from '../AppPage';

class DailyReportsPage extends AppPage{

    get diaryBtn(){
        return $('//a[contains(text(),\'Diary\')]');
    }

    get h1(){
        return $('//h1');
    }

}

export default new DailyReportsPage();