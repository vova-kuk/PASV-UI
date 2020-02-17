import {expect} from 'chai';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import LoginPage from "../../_PageObjects/LoginPage";
import {positive, pageTitle} from "./newFlashCard_data";

describe('NEW FLASH CARD CREATE', ()=> {
   before('should login as student', () => {
// ====== currently logging in as an admin. Waiting for login(role) implementation ==========
        LoginPage.login();
   });

    it('should open Flash Cards page', () => {
        FlashCardsPage.open();
    });

    it('should check if the opened page is the Flash group page', () => {
          const actual = FlashCardsPage.h1.getText();
          expect(actual).equal(pageTitle);
        });

    it('should check if the exact Flash card group exists', () => {
        const actual = FlashCardsPage.groupName;
        expect(actual).to.exist;
    });

    it('should open the exact Flash Group',  () => {
        FlashCardsPage.groupName.click();
    });

    it('should check if the correct Flash group is opened', () => {
        const actual = FlashCardsPage.titleOfCurrentGroup.getText();
        const expected = positive.groupName;
        expect(actual).equal(expected);
    });

    it('should click Waiting for approval link', () => {
        FlashCardsPage.waitingForApproval.click();
    });

    it('should click Create new Card button',  () => {
        FlashCardsPage.createNewCardBtn.click();
        browser.pause(1000);
    });

    it('should check if modal form is open', () => {
        const element = FlashCardsPage.modalForm;
        expect(element.isDisplayed()).true;
    });

    it('should check if the correct modal form is open',  () => {
        const actual = FlashCardsPage.modalFormTitle.getText();
        const expected = 'Create Flash Card';
        expect(actual).equal(expected);
    });

    it('should fill in the Question field', () => {
        FlashCardsPage.question.setValue(positive.questionText);
    });

    it('should fill in the Answer field',  () => {
        FlashCardsPage.answer.setValue(positive.answerText);
        browser.pause(1000);
    });

    it('should check if Create button is enabled',  () => {
        const el = FlashCardsPage.createBtn.isEnabled();
        expect(el).be.true;
    });

    it('should click Create button',  () => {
        FlashCardsPage.createBtn.click();
        browser.pause(1000);
    });

    it('should check if the card was created', () => {
        const actual = FlashCardsPage.lastCreatedCard.getText();
        const expected = positive.questionText;
        expect(actual).equal(expected);
        });

    it('should check if the card was created in the correct group', () => {
        const actual = FlashCardsPage.titleOfCurrentGroup.getText();
        const expected = positive.groupName;
        expect(actual).equal(expected);
    });

    after('logout', () => {
        FlashCardsPage.logout();
    })

});