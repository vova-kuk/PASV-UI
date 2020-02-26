import AppPage from '../../groups/_data/_page/AppPage';

class DiaryPage extends AppPage {
  goToDiaryPage() {
    super.click('//a[@qa="diary-link"]');
  }

  get approveBtn() {
    return $('//button[@qa="approve-button"]');
  }
}

export default new DiaryPage();
