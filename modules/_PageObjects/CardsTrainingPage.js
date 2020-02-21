import AppPage from '../AppPage';

class CardsTrainingPage extends AppPage {

  get groupTitle() {
    return browser.$('//h1');
  }

  get trainingLabel() {
    return browser.$('//ul[@qa="flash-group-tabs"]//a[contains(text(),"Training")]');
  }

  get startTrainingButton() {
    return browser.$('//div//button[@class="btn btn-secondary btn-sm"]');
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

  get progressBarValue1() {
    return browser.$('//div[@class="container"]//div[@aria-valuenow="0"]');
  }

  get progressBarValue2() {
    return browser.$('//div[@class="container"]//div[@aria-valuenow="33"]');
  }

  get progressBarValue3() {
    return browser.$('//div[@class="container"]//div[@aria-valuenow="66"]');
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

}

export default new CardsTrainingPage();
