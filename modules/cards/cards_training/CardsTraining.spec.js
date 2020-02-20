import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import {student} from '../../user/login/loginRole_data';
import CardsTrainingPage from '../../_PageObjects/CardsTrainingPage';
import LoginPage from '../../_PageObjects/LoginPage';

let progressBefore;
let progressAfter;


describe('CARDS TRAINING', () => {
  before('login as a student', () => {
    LoginPage.loginRole(student);
  });

  it('should click `Cards` tab in the main bar', () => {
    ProfilePage.cardsLink.click();
    browser.pause(500);
  });

  it('should have a correct page title', () => {
    expect(FlashCardsPage.h1.getText()).eq('FlashCards');
    browser.pause(500);
  });

  it('should find `Test Group` group and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    browser.pause(500);
  });

  it('should check a group title', () => {
    expect(CardsTrainingPage.title.getText()).equal('TestGroup');
  });

  it('should check if `Training` label is displayed', () => {
    expect(CardsTrainingPage.trainingLabel.isDisplayed()).true;
  });

  it('should click `Training` link', () => {
    CardsTrainingPage.trainingLabel.click();
    browser.pause(500);
  });

  it('should check if `Start training` button is displayed', () => {
    expect(CardsTrainingPage.startTrainingButton.isDisplayed()).true;
    browser.pause(500);
  });

  it('should check if `Start training` button is clickable', () => {
    CardsTrainingPage.startTrainingButton.click();
    browser.pause(500);
  });

  it('should check if `I know` button is displayed', () => {
    expect(CardsTrainingPage.iKnow.isDisplayed()).true;
  });

  it('should check if `Show answer` button is displayed', () => {
    expect(CardsTrainingPage.showAnswerButton.isDisplayed()).true;
  });

  it('should check if `Get random next` button is displayed', () => {
    expect(CardsTrainingPage.getRandom.isDisplayed()).true;
  });

  it('should click `Show answer` button', () => {
    CardsTrainingPage.showAnswerButton.click();
    browser.pause(500);
  });

  it('should check if an answer is displayed', () => {
    expect(CardsTrainingPage.answer.isDisplayed()).true;
    CardsTrainingPage.getRandomClick();
    browser.pause(500);
  });

  it('should check a progress bar before clicking `I know`', () => {
    progressBefore = CardsTrainingPage.progress1.getText();
    browser.pause(500);
  });

  it('should click `I know`, and check if progress has changed from 0 to 33', () => {
    CardsTrainingPage.iKnowClick();
    progressAfter = CardsTrainingPage.progress2.getText();
    expect(progressAfter).to.not.equal(progressBefore);
    browser.pause(500);
  });

  it('should click `I know`, and check if progress has changed from 33 to 66', () => {
    CardsTrainingPage.iKnowClick();
    progressBefore = CardsTrainingPage.progress2.getText();
    progressAfter = CardsTrainingPage.progress3.getText();
    expect(progressAfter).to.not.equal(progressBefore);
    browser.pause(500);
  });

  it('should click `I know`, and return to the `Training` page', () => {
    CardsTrainingPage.iKnowClick();
    browser.pause(500);
  });

  it('should check if `Start training` button is displayed ', () => {
    expect(CardsTrainingPage.startTrainingButton.isDisplayed()).true;
    browser.pause(500);
  });
});





