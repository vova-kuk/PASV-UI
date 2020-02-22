import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import {student} from '../../user/login/loginRole_data';
import CardsTrainingPage from '../../_PageObjects/CardsTrainingPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('CARDS TRAINING', () => {
  before('login as a student', () => {
    LoginPage.loginRole(student);
  });

  it('should click `Cards` tab in the navigation bar', () => {
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
    expect(CardsTrainingPage.groupTitle.getText()).equal('TestGroup');
  });

  it('should check if `Training` label is displayed', () => {
    expect(CardsTrainingPage.trainingLabel.isDisplayed()).true;
  });

  it('should click `Training` link', () => {
    CardsTrainingPage.trainingLabel.click();
    browser.pause(1000);
  });

  it('should check if `Start training` button is displayed', () => {
    expect(CardsTrainingPage.startTrainingButton.isDisplayed()).true;
    browser.pause(500);
  });

  it('should check if `Start training` button is clickable', () => {
    CardsTrainingPage.startTrainingClick();
    browser.pause(500);
  });

  it('should check if `I know` button is displayed', () => {
    expect(CardsTrainingPage.iKnowButton.isDisplayed()).true;
  });

  it('should check if `Show answer` button is displayed', () => {
    expect(CardsTrainingPage.showAnswerButton.isDisplayed()).true;
  });

  it('should check if `Get random next` button is displayed', () => {
    expect(CardsTrainingPage.getRandomButton.isDisplayed()).true;
  });

  it('should click `Show answer` button', () => {
    CardsTrainingPage.showAnswerButtonClick();
    browser.pause(500);
  });

  it('should check if an answer is displayed', () => {
    expect(CardsTrainingPage.answerText.isDisplayed()).true;
    browser.pause(500);
  });

  it('should click `Get Random` button', () => {
    CardsTrainingPage.getRandomButtonClick();
    browser.pause(500);
  });

  it('should check if a progress bar is 0 from start and click `I know`', () => {
    expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq('0');
    browser.pause(1000);
    CardsTrainingPage.iKnowButtonClick();
    browser.pause(500);

  });

  it('should check if a progress bar is 33 after 1st answer and click `I know`', () => {
    expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq('33');
    browser.pause(1000);
    CardsTrainingPage.iKnowButtonClick();
    browser.pause(500);
  });

  it('should check if a progress bar is 66 after 2nd answer and click `I know`', () => {
    expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq('66');
    browser.pause(1000);
    CardsTrainingPage.iKnowButtonClick();
    browser.pause(500);
  });

  it('should check if `Start training` button is enabled', () => {
    expect(CardsTrainingPage.startTrainingButton.isEnabled()).true;
    browser.pause(500);
  });
});
