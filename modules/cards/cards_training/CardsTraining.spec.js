import {expect} from 'chai';
import Menu from '../../_PageObjects/Menu';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import {student} from '../../_data/user.data';
import CardsTrainingPage from '../../_PageObjects/CardsTrainingPage';
import LoginPage from '../../_PageObjects/LoginPage';
import { groupName } from "../../_data/cardsTraining.data";

describe('CARDS TRAINING', () => {
  before('login as a student', () => {
    LoginPage.login(student);
  });

  it('should click `Cards` tab in the navigation bar', () => {
    Menu.cardsLink.click();
    browser.pause(500);
  });

  it('should find `Test Group` group and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    browser.pause(500);
  });

  it('should check a group title', () => {
    expect(CardsTrainingPage.groupTitle.getText()).eq(groupName);
  });

  it('should check if `Training` label is displayed', () => {
    expect(CardsTrainingPage.trainingLbl.isDisplayed()).true;
  });

  it('should click `Training` link', () => {
    CardsTrainingPage.trainingLbl.click();
    browser.pause(1000);
  });

  it('should check if `Start training` button is displayed', () => {
    expect(CardsTrainingPage.startTrainingBtn.isDisplayed()).true;
    browser.pause(500);
  });

  it('should check if `Start training` button is clickable', () => {
    CardsTrainingPage.startTrainingClick();
    browser.pause(1000);
  });

  it('should check if `I know` button is displayed', () => {
    expect(CardsTrainingPage.iKnowBtn.isDisplayed()).true;
  });

  it('should check if `Show answer` button is displayed', () => {
    expect(CardsTrainingPage.showAnswerBtn.isDisplayed()).true;
  });

  it('should check if `Get random next` button is displayed', () => {
    expect(CardsTrainingPage.getRandomBtn.isDisplayed()).true;
  });

  it('should click `Show answer` button', () => {
    CardsTrainingPage.showAnswerBtnClick();
    browser.pause(500);
  });

  it('should check if an answer is displayed', () => {
    expect(CardsTrainingPage.answerTxt.isDisplayed()).true;
    browser.pause(500);
  });

  it('should click `Get Random` button', () => {
    CardsTrainingPage.getRandomBtnClick();
    browser.pause(500);
  });

  it('should check if a progress bar is 0 from start and click `I know`', () => {
    expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq('0');
    browser.pause(500);
    CardsTrainingPage.iKnowBtnClick();
    browser.pause(1000);

  });

  it('should check if a progress bar is 33 after 1st answer and click `I know`', () => {
    expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq('33');
    browser.pause(500);
    CardsTrainingPage.iKnowBtnClick();
    browser.pause(1000);
  });

  it('should check if a progress bar is 66 after 2nd answer and click `I know`', () => {
    expect(CardsTrainingPage.progressBar.getAttribute('aria-valuenow')).eq('66');
    browser.pause(500);
    CardsTrainingPage.iKnowBtnClick();
    browser.pause(1000);
  });

  it('should check if `Start training` button is enabled', () => {
    expect(CardsTrainingPage.startTrainingBtn.isEnabled()).true;
    browser.pause(500);
  });
});
