import AppPage from '../AppPage';

class CardsTrainingPage extends AppPage {

  get title() {
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

  get iKnow() {
    return browser.$('//button[contains(text(),"I know")]');
  }

  get getRandom() {
    return browser.$('//button[contains(text(),"Get random next")]');
  }

  get answer() {
    return browser.$('//div[@class="result"]//p');
  }

  get progress1() {
    return browser.$('//div[@class="container"]//div[@aria-valuenow="0"]');
  }

  get progress2() {
    return browser.$('//div[@class="container"]//div[@aria-valuenow="33"]');
  }

  get progress3() {
    return browser.$('//div[@class="container"]//div[@aria-valuenow="66"]');
  }

  open(path) {
    super.open('')
  }

  getRandomClick() {
    this.getRandom.click();
  }

  iKnowClick() {
    this.iKnow.click();
  }

}

export default new CardsTrainingPage();
