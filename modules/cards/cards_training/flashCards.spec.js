import { expect } from 'chai';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import LoginPage from "../../_PageObjects/LoginPage";
import FlashCardList from "./FlashCardList";

describe('(POSITIVE): FlashCards: Check Title and Description', () => {
    before('Login as Student',()=>{
        LoginPage.loginAsStudent();
        browser.pause(500);
    });

    it('should check page title', () => {
        FlashCardsPage.openCardsMenu().click();
        const actual=FlashCardsPage.h1.getText();
        const expected='FlashCards';
        expect(actual).eq(expected);
        browser.pause(200);
    });

    it('should check description', function () {
        const actual=FlashCardsPage.description.getText();
        const expected='Now the stage of filling content cards. Create cards. After there will be enough cards training will be opened for memorization.';
        expect(actual).eq(expected);
        browser.pause(400);
    });

    it('should check the name of the first(top) card', function () {
        const actual=FlashCardsPage.firstCreatedCard.getText();
        const expected='Black Jack';
        expect(actual).eq(expected);
    });

    it('should check title of the very 1st created card', function (){
        const actual=FlashCardList.cardLastInList.getText();
        const expected='Любители багов';
        expect(actual).eq(expected);
    });

    it('should have `Black Jack` title when clicked on name', function () {
        FlashCardsPage.firstCreatedCard.click();
        const actual=FlashCardList.h1.getText();
        const expected='Black Jack';
        expect(actual).eq(expected);
    });

    it('should check `Main view` title of Navigation Menu link', function () {
        const actual=FlashCardList.mainView.getText();
        expect(actual).eq('Main view');
    });

    it('should check `Compact view` title of Navigation Menu link', function () {
        const actual=FlashCardList.compactView.getText();
        expect(actual).eq('Compact view');
    });

    it('should check `Waiting for approval` title of Navigation Menu link', function () {
        const actual=FlashCardList.waitingForApproval.getText();
        expect(actual).eq('Waiting for approval');
    });

    it('should check `Training` title of Navigation Menu link', function () {
        const actual=FlashCardList.training.getText();
        expect(actual).eq('Training');
    });

    it('should check link `Main view` be clickable/active', function () {
        const actual=FlashCardList.mainView.isClickable();
        expect(actual).be.true;
    });

    it('should check link `Compact view` be clickable/active', function () {
        const actual=FlashCardList.compactView.isClickable();
        expect(actual).be.true;
    });

    it('should check link `Waiting for approval` be clickable/active', function () {
        const actual=FlashCardList.waitingForApproval.isClickable();
        expect(actual).be.true;
    });

    it('should check link `Training` be clickable/active', function () {
        const actual=FlashCardList.training.isClickable();
        expect(actual).be.true;
    });




});




