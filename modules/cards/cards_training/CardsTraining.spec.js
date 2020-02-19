import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import {student} from "../../user/login/loginRole_data";
import CardsTrainingPage from "../../_PageObjects/CardsTrainingPage";
import LoginPage from "../../_PageObjects/LoginPage";
import CheckEmailPage from "../../_PageObjects/CheckEmailPage";
let progressBefore;

describe ('CARDS TRAINING', () => {
    before('login as a student', () => {
        LoginPage.loginRole(student);
    });

    it ('should click main menu "Cards" link', () => {
        ProfilePage.cardsLink.click();
        browser.pause(500);
    });

    it('should have correct h1 title', () => {
        expect(FlashCardsPage.h1.getText()).eq('FlashCards');
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
    });

     */
});
