import AppPage from '../AppPage';

class DailyReportsPage extends AppPage{

    get diaryBtn(){
        return $('//a[contains(text(),\'Diary\')]');
    }

    get createBtn () {
        return $('//a[@class=\'btn btn-secondary\']');
    }

    get studentName () {
        return $('//a');
    }

    // get reportListByLabels () {
    //     return $('//[@qa=labels]')
    // }

}

export default new DailyReportsPage();