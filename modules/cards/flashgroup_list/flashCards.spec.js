import { expect } from 'chai';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import LoginPage from "../../_PageObjects/LoginPage";
import {student} from "../../user/login/loginRole_data";

describe('(POSITIVE): FlashCards: Check Title and Description', () => {
    before('Login as Student', () => {
        LoginPage.loginRole(student);
        browser.pause(500);
    });

    it('should check page title', () => {
        FlashCardsPage.openCardsMenu().click();
        const actual = FlashCardsPage.h1.getText();
        const expected = 'FlashCards';
        expect(actual).eq(expected);
        browser.pause(200);
    });

    it('should check description', function () {
        const actual = FlashCardsPage.description.getText();
        const expected = 'Now the stage of filling content cards. Create cards. After there will be enough cards training will be opened for memorization.';
        expect(actual).eq(expected);
        browser.pause(400);
    });

    //Эти тесты через раз падают, так как постоянно создаются новые и сравнение сделать сложнее по имени.
    // it('should check the name of the first(top) card', function () {
    //     const actual = FlashCardsPage.firstCreatedCard.getText();
    //     const expected = 'Black Jack';
    //     expect(actual).eq(expected);
    // });

    // it('should have `Black Jack` title when clicked on name', function () {
    //     FlashCardsPage.firstCreatedCard.click();
    //     const actual=FlashCardsPage.h1LastCreated.getText();
    //     const expected='Black Jack';
    //     expect(actual).eq(expected);
// })

    it('should check title of the oldest created card', function () {
        const actual = FlashCardsPage.cardLastInList.getText();
        const expected = 'Любители багов';
        expect(actual).eq(expected);
    });

    it('should check `Main view` title of Navigation Menu link', function () {
        FlashCardsPage.firstCreatedCard.click();
        const actual=FlashCardsPage.mainView.getText();
        expect(actual).eq('Main view');
    });

    it('should check `Compact view` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.compactView.getText();
        expect(actual).eq('Compact view');
    });

    it('should check `Waiting for approval` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.waitingForApproval.getText();
        expect(actual).eq('Waiting for approval');
    });

    it('should check `Training` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.training.getText();
        expect(actual).eq('Training');
    });

    it('should check link `Main view` be clickable/active', function () {
        const actual=FlashCardsPage.mainView.isClickable();
        expect(actual).be.true;
    });

    it('should check link `Compact view` be clickable/active', function () {
        const actual=FlashCardsPage.compactView.isClickable();
        expect(actual).be.true;
    });

    it('should check link `Waiting for approval` be clickable/active', function () {
        const actual=FlashCardsPage.waitingForApproval.isClickable();
        expect(actual).be.true;
    });

    it('should check link `Training` be clickable/active', function () {
        const actual=FlashCardsPage.training.isClickable();
        expect(actual).be.true;
    })

})




