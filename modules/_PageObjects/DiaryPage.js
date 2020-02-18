import AppPage from "../AppPage";


class DiaryPage extends AppPage{

    get goToDiaryPage() {
        super.click('//a[@qa="diary-link"]');
    }

    get approveBtn() {
        return $('//button[@qa="approve-button"]');
    }

}

export default new DiaryPage();