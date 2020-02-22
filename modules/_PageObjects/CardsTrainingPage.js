import AppPage from '../AppPage';

class CardsTrainingPage extends AppPage {

  get groupTitle() {
    return browser.$('//h1');
  }

  get trainingLabel() {
    return browser.$('//ul[@qa="flash-group-tabs"]//a[contains(text(),"Training")]');
  }

  get startTrainingButton() {
    return browser.$('//button[contains(text(),"Start training")]');
  }

  get showAnswerButton() {
    return browser.$('//div//button[contains(text(),"Show")]');
  }

  get iKnowButton() {
    return browser.$('//button[contains(text(),"I know")]');
  }

  get getRandomButton() {
    return browser.$('//button[contains(text(),"Get random next")]');
  }

  get answerText() {
    return browser.$('//div[@class="result"]//p');
  }

  get progressBar() {
    return browser.$('//div[@class="progress"]//div[@aria-valuenow]');
  }

  open(path) {
    super.open('');
  }

  getRandomButtonClick() {
    this.getRandomButton.click();
  }

  iKnowButtonClick() {
    this.iKnowButton.click();
  }

  startTrainingClick() {
    this.startTrainingButton.click();
  }

  showAnswerButtonClick() {
    this.showAnswerButton.click();
  }

}

export default new CardsTrainingPage();
