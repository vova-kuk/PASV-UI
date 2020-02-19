import { expect } from 'chai';
import LoginPage from "../../_PageObjects/LoginPage";
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import FlashCardList from "./FlashCardList";

describe('(NEGATIVE): FlashCards: Check Title and Description', () => {
    before('Login as Student', () => {
        LoginPage.loginAsStudent();
        browser.pause(500);
    });

    it('should check page title', () => {
        FlashCardsPage.openCardsMenu().click();
        const actual = FlashCardsPage.h1.getText();
        const expected = 'Flash ards';
        expect(actual).not.eq(expected);
        browser.pause(200);
    });

    it('should check description', function () {
        const actual = FlashCardsPage.description.getText();
        const expected = 'After there will be enough cards training will be opened for memorization.';
        expect(actual).not.eq(expected);
        browser.pause(200);
    });

    it('should check the name of the first card', function () {
        const actual=FlashCardsPage.firstCreatedCard.getText();
        const expected='ReactJS';
        expect(actual).not.eq(expected);
    });

    it('should check title of the very 1st created card', function (){
        const actual=FlashCardList.cardLastInList.getText();
        const expected='Любители агов';
        expect(actual).not.eq(expected);
    });


    it('should have `Black Jack` title when clicked on name', function () {
        FlashCardsPage.firstCreatedCard.click();
        const actual=FlashCardList.h1.getText();
        const expected='Black ack';
        expect(actual).not.eq(expected);
    });

    it('should check `Main view` title of Navigation Menu link', function () {
        const actual=FlashCardList.mainView.getText();
        expect(actual).not.eq('Main View');
    });

    it('should check `Compact view` title of Navigation Menu link', function () {
        const actual=FlashCardList.compactView.getText();
        expect(actual).not.eq('Compact View');
    });

    it('should check `Waiting for approval` title of Navigation Menu link', function () {
        const actual=FlashCardList.waitingForApproval.getText();
        expect(actual).not.eq('Waiting approval');
    });

    it('should check `Training` title of Navigation Menu link', function () {
        const actual=FlashCardList.training.getText();
        expect(actual).not.eq('raining');
    });

    it('should check link `Main view` be clickable/active', function () {
        const actual=FlashCardList.mainView.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

    it('should check link `Compact view` be clickable/active', function () {
        const actual=FlashCardList.compactView.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

    it('should check link `Waiting for approval` be clickable/active', function () {
        const actual=FlashCardList.waitingForApproval.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

    it('should check link `Training` be clickable/active', function () {
        const actual=FlashCardList.training.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

});