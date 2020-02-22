import AppPage from '../AppPage';

class DailyReportsPage extends AppPage{

    get diaryBtn(){
        return $('//a[contains(text(),\'Diary\')]');
    }

    get createBtn () {
        return $('//a[@class=\'btn btn-secondary\']');
    }

    checkLast3Reports () {
        for (let i = 0; i < 3; i++) {
            $(`//div[@qa="day-report-item-${i}"]`).isExisting()
        }
    }

}

export default new DailyReportsPage();