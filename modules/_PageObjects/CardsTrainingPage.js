import AppPage from '../AppPage';

class CardsTrainingPage extends AppPage {

  get title() {
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

  get iKnow() {
    return browser.$('//button[contains(text(),"I know")]');
  }

  get getRandom() {
    return browser.$('//button[contains(text(),"Get random next")]');
  }

  get answer() {
    return browser.$('//div[@class="result"]//p');
  }

  get progress() {
    return browser.$('//div[@class="progress"]//div[@aria-valuenow]');
  }

  open(path) {
    super.open('');
  }

  getRandomClick() {
    this.getRandom.click();
  }

  iKnowClick() {
    this.iKnow.click();
  }

  startTrainingClick() {
    this.startTrainingButton.click();
  }

  showAnswerClick() {
    this.showAnswerButton.click();
  }

}

export default new CardsTrainingPage();
