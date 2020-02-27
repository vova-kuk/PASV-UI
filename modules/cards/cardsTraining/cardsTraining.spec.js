import { expect } from 'chai';
import Menu from '../../_page/Menu';
import FlashCardsPage from '../../_page/FlashCardsPage';
import LoginPage from '../../user/_page/LoginPage';
import { student } from '../../user/_data/user.data';
import CardsTrainingPage from '../_page/CardsTrainingPage';
import { groupName } from '../_data/cardsTraining.data';

describe('CARDS TRAINING', () => {
  before('login as a student, click Cards label and redirect to the FlashCards page', () => {
    LoginPage.login(student);
    Menu.cardsLink.click();
    browser.waitUntil(() => FlashCardsPage.h1.getText() === 'FlashCards', 2000);
  });

  it('should find `Test Group` group and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    browser.waitUntil(() => CardsTrainingPage.groupTitle.getText() === 'TestGroup', 100);
  });

  it('should check if `Training` label is displayed', () => {
    expect(FlashCardsPage.trainingLink.isDisplayed()).true;
  });

  it('should click `Training` link and check if `Start training` button is displayed', () => {
    FlashCardsPage.trainingLink.click();
    CardsTrainingPage.startTrainingBtn.waitForDisplayed(5000);
  });

  // it('should check if `Start training` button is displayed', () => {
  //   expect(CardsTrainingPage.startTrainingBtn.isDisplayed()).true;
  // });

  it('should click `Start training` button', () => {
    CardsTrainingPage.startTrainingClick();
  });

  it('should check if `I know` button is displayed', () => {
    CardsTrainingPage.iKnowBtn.waitForDisplayed(1000);
  });

  it('should check if `Show answer` button is displayed', () => {
    CardsTrainingPage.showAnswerBtn.waitForDisplayed(1000);
  });

  it('should check if `Get random next` button is displayed', () => {
    CardsTrainingPage.getRandomBtn.waitForDisplayed(1000);
  });

  it('should click `Show answer` button and check if answer is displayed', () => {
    CardsTrainingPage.showAnswerBtnClick();
    CardsTrainingPage.answerTxt.waitForDisplayed(1000);
  });

  it('should check if an answer is displayed', () => {
    CardsTrainingPage.answerTxt.waitForDisplayed(1000);
  });

  it('should click `Get Random` button', () => {
    CardsTrainingPage.getRandomBtnClick();
  });

  it('should check progress bar value and click `I know`', () => {
    FlashCardsPage.compactViewLink.click();
    browser.pause(1000);

    const nrOfCards = $$('//div[@class="pb-1 mb-1 border-bottom"]').length;
    browser.pause(1000);

    FlashCardsPage.trainingLink.click();
    browser.pause(1000);

    for (let i = 0; i < nrOfCards; i++) {
      expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq(
        Math.floor((100 / nrOfCards) * i).toString(),
      );
      CardsTrainingPage.iKnowBtnClick();
      browser.pause(1000);
    }
  });

  it('should check if `Start training` button is enabled', () => {
    expect(CardsTrainingPage.startTrainingBtn.isEnabled()).true;
  });
});
