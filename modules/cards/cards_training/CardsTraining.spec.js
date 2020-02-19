import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import {student} from "../../user/login/loginRole_data";
import CardsTrainingPage from "../../_PageObjects/CardsTrainingPage";
import LoginPage from "../../_PageObjects/LoginPage";

let progressBefore;

describe('CARDS TRAINING', () => {
  before('login as a student', () => {
    LoginPage.loginRole(student);
  });

  it('should click main menu "Cards" link', () => {
    ProfilePage.cardsLink.click();
    browser.pause(500);
  });

  it('should have correct h1 title', () => {
    expect(FlashCardsPage.h1.getText()).eq('FlashCards');

  });

  it('should find group "Test Group" and click', () => {
    FlashCardsPage.linkToGroup.scrollIntoView();
    FlashCardsPage.linkToGroup.click();
    browser.pause(1000);
  });

  it('should check Group title', function () {
    expect(CardsTrainingPage.title.getText()).equal('TestGroup');
  });

  it('should check if Training label is displayed', function () {
    expect(CardsTrainingPage.trainingLabel.isDisplayed()).true;
  });
  it('should click Training link', function () {
    CardsTrainingPage.trainingLabel.click();
    browser.pause(500);
  });

  // Artem
  it('should check if start button is displayed -click, if not -check i know button', () => {
    if (CardsTrainingPage.startTraining.isDisplayed()) {
      CardsTrainingPage.startTraining.click();
      browser.pause(1000);
    } else {
      CardsTrainingPage.iKnow.isDisplayed();
    }
    browser.pause(1000);
  });

//Anna
  /*
  it('should check if answer is displayed', () => {
      expect(CardsTrainingPage.answer.isDisplayed()).true;
  });

  it('should click `Get random next`', () => {
      CardsTrainingPage.getRandomClick();
      browser.pause(500);
  });

  it('should click `Get random next`', () => {
      CardsTrainingPage.getRandomClick();
      browser.pause(500);
  });

  it('should check progress bar before `I Know` click', () => {
      progressBefore = CardsTrainingPage.progress.getText();
      browser.pause(2000);
  });

  it('should click `I Know`', () => {
      CardsTrainingPage.iKnowClick();
      browser.pause(500);
  });

  it('should check if progress has changed', () => {
      browser.refresh();
      const progressAfter = CardsTrainingPage.progress.getText();
      expect(progressAfter).to.not.equal(progressBefore);
      browser.pause(1000);
  //});

   */

});

