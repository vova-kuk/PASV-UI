import { expect } from 'chai';
import LoginPage from "../../_PageObjects/LoginPage";
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import {student} from "../../user/login/loginRole_data";

describe('(NEGATIVE): FlashCards: Check Title and Description', () => {
    before('Login as Student', () => {
        LoginPage.loginRole(student);
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
        const actual=FlashCardsPage.cardLastInList.getText();
        const expected='Любители агов';
        expect(actual).not.eq(expected);
    });


    it('should have `Black Jack` title when clicked on name', function () {
        FlashCardsPage.firstCreatedCard.click();
        const actual=FlashCardsPage.h1LastCreated.getText();
        const expected='Black ack';
        expect(actual).not.eq(expected);
    });

    it('should check `Main view` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.mainView.getText();
        expect(actual).not.eq('Main View');
    });

    it('should check `Compact view` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.compactView.getText();
        expect(actual).not.eq('Compact View');
    });

    it('should check `Waiting for approval` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.waitingForApproval.getText();
        expect(actual).not.eq('Waiting approval');
    });

    it('should check `Training` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.training.getText();
        expect(actual).not.eq('raining');
    });

    it('should check link `Main view` be clickable/active', function () {
        const actual=FlashCardsPage.mainView.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

    it('should check link `Compact view` be clickable/active', function () {
        const actual=FlashCardsPage.compactView.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

    it('should check link `Waiting for approval` be clickable/active', function () {
        const actual=FlashCardsPage.waitingForApproval.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

    it('should check link `Training` be clickable/active', function () {
        const actual=FlashCardsPage.training.isClickable();
        const expected=false;
        expect(actual).not.eq(expected);
    });

});