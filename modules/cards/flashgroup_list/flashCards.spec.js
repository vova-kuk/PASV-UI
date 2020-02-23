import { expect } from 'chai';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import LoginPage from '../../_PageObjects/LoginPage';
import {student} from '../../_data/user.data';

describe('CARDS/FLASHCARDS --POSITIVE', () => {
    before('login as a student', () => {
        LoginPage.login(student);
        browser.pause(500);
    });

    it('should check a `FlashCards` page title', () => {
        FlashCardsPage.openCardsMenu().click();
        const actual = FlashCardsPage.h1.getText();
        const expected = 'FlashCards';
        expect(actual).eq(expected);
        browser.pause(200);
    });

    it('should check a description', function () {
        const actual = FlashCardsPage.pageDescription.getText();
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

    it('should check `Main view` title in the navigation menu link', function () {
        FlashCardsPage.firstCreatedCard.click();
        const actual=FlashCardsPage.mainViewLink.getText();
        expect(actual).eq('Main view');
    });

    it('should check `Compact view` title in the navigation menu', function () {
        const actual=FlashCardsPage.compactViewLink.getText();
        expect(actual).eq('Compact view');
    });

    it('should check `Waiting for approval` title in the navigation menu', function () {
        const actual=FlashCardsPage.waitingForApproval.getText();
        expect(actual).eq('Waiting for approval');
    });

    it('should check `Training` title of Navigation Menu link', function () {
        const actual=FlashCardsPage.trainingLink.getText();
        expect(actual).eq('Training');
    });

    it('should check `Main view` link is clickable', function () {
        const actual=FlashCardsPage.mainViewLink.isClickable();
        expect(actual).be.true;
    });

    it('should check `Compact view` link is clickable', function () {
        const actual=FlashCardsPage.compactViewLink.isClickable();
        expect(actual).be.true;
    });

    it('should check `Waiting for approval` link is clickable', function () {
        const actual=FlashCardsPage.waitingForApproval.isClickable();
        expect(actual).be.true;
    });

    it('should check `Training` link is clickable', function () {
        const actual=FlashCardsPage.trainingLink.isClickable();
        expect(actual).be.true;
    });

});




