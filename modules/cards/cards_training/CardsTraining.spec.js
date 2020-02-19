import {expect} from 'chai';
import CardsTrainingPage from "../../_PageObjects/CardsTrainingPage";
import LoginPage from "../../_PageObjects/LoginPage";
import CheckEmailPage from "../../_PageObjects/CheckEmailPage";

let progressBefore;

describe('', () => {
    before('login', () => {

    });

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
});
