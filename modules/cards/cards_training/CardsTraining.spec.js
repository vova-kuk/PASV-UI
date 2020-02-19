import {expect} from 'chai';
import CardsTrainingPage from "../../_PageObjects/CardsTrainingPage";
import LoginPage from "../../_PageObjects/LoginPage";
import {student} from "../../user/login/loginRole_data";

let progressBefore;

describe('', () => {
    before('Loin as Student', () => {
        LoginPage.loginRole(student);
    });

    it('should check if start button is displayed -click, if not -check i know button', () => {
        if (CardsTrainingPage.startTraining.isDisplayed()) {
            CardsTrainingPage.startTraining.click();
            browser.pause(1000);
        } else {
            CardsTrainingPage.iKnow.isDisplayed();
        }
        browser.pause(1000);
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
