import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import {student} from "../../user/login/loginRole_data";
import CardsTrainingPage from "../../_PageObjects/CardsTrainingPage";
import LoginPage from "../../_PageObjects/LoginPage";

let progressBefore;
let progressAfter;


describe('CARDS TRAINING', () => {
  before('login as a student', () => {
    LoginPage.loginRole(student);
  });

  it('should click main menu "Cards" link', () => {
    ProfilePage.cardsLink.click();
    browser.pause(500);
  });

  it('should have correct Flash cards page title', () => {
    expect(FlashCardsPage.h1.getText()).eq('FlashCards');
    browser.pause(500);
  });

  it('should find group "Test Group" and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    browser.pause(500);
  });

  it('should check Group title', () => {
    expect(CardsTrainingPage.title.getText()).equal('TestGroup');
  });

  it('should check if Training label is displayed', () => {
    expect(CardsTrainingPage.trainingLabel.isDisplayed()).true;
  });

  it('should click Training link', () => {
    CardsTrainingPage.trainingLabel.click();
    browser.pause(500);
  });

  it('should check if start training button is displayed', () => {
    expect(CardsTrainingPage.startTrainingButton.isDisplayed()).true;
    browser.pause(500);
  });

  it('should check if start training button is clickable', () => {
    CardsTrainingPage.startTrainingButton.click();
    browser.pause(500);
  });

  it('should check if button I know is displayed', () => {
    expect(CardsTrainingPage.iKnow.isDisplayed()).true;
  });

  it('should check if "Show answer button" is displayed', () => {
    expect(CardsTrainingPage.showAnswerButton.isDisplayed()).true;
  });

  it('should check if "Get random next" button is displayed', () => {
    expect(CardsTrainingPage.getRandom.isDisplayed()).true;
  });

  it('should click "Show answer button" button', () => {
    CardsTrainingPage.showAnswerButton.click();
    browser.pause(500);
  });

  it('should check if Answer is displayed', () => {
    expect(CardsTrainingPage.answer.isDisplayed()).true;
    CardsTrainingPage.getRandomClick();
    browser.pause(500);
  });

  it('should check progress bar before `I Know` click', () => {
    progressBefore = CardsTrainingPage.progress1.getText();
    browser.pause(500);
  });

  it('should click `I Know` and check if progress has changed from 0 to 33', () => {
    CardsTrainingPage.iKnowClick();
    progressAfter = CardsTrainingPage.progress2.getText();
    expect(progressAfter).to.not.equal(progressBefore);
    browser.pause(500);
  });

  it('should click `I Know` and check if progress has changed from 33 to 66', () => {
    CardsTrainingPage.iKnowClick();
    progressBefore = CardsTrainingPage.progress2.getText();
    progressAfter = CardsTrainingPage.progress3.getText();
    expect(progressAfter).to.not.equal(progressBefore);
    browser.pause(500);
  });

  it('should click `I Know` and exit to the start', () => {
    CardsTrainingPage.iKnowClick();
    browser.pause(500);
  });

  it('should check if start training button is displayed ', () => {
    expect(CardsTrainingPage.startTrainingButton.isDisplayed()).true;
    browser.pause(500);
  });
});





