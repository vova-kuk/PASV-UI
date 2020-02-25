import {expect} from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import MainAndCompactViewPage from '../../_PageObjects/MainAndCompactViewPage';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import {student} from '../../_data/user.data';
import {pageTestData} from '../../_data/mainAndCompact.data';
import {groupNameLink} from '../../_data/newCard.data';

describe('EXIST A MAIN AND COMPACT VIEW OF A FLASH CARD', () => {
    before('login as a student', () => {
        LoginPage.login(student);
        browser.pause(500);
    });

    it('should go to `FlashCards` page', () => {
        FlashCardsPage.open();
        browser.pause(2000);
        expect(pageTestData.title).equal(FlashCardsPage.h1.getText());
    });

    it('should go to `FlashCards` group page', () => {
        browser.$(groupNameLink).click();
        browser.pause(2000);
        expect(pageTestData.groupName).equal(FlashCardsPage.h1.getText());
    });

   it ('should redirect to `Main view`', () => {
       MainAndCompactViewPage.mainView.click();
       expect(MainAndCompactViewPage.mainViewActive.isExisting()).equal(true)
   });

    it ('should redirect to `Compact view`', () => {
        MainAndCompactViewPage.compactView.click();
        expect(MainAndCompactViewPage.compactViewActive.isExisting()).equal(true)
    });

    it ('should check that the text does not appear before hovering over the question', () => {
        expect(MainAndCompactViewPage.answerText.isExisting()).equals(false);
    });

    it ('should check that the text appears when hovering over the question', () => {
        MainAndCompactViewPage.questionText.moveTo();
        browser.pause(100);
        expect(MainAndCompactViewPage.answerText.isExisting()).equals(true);
    });

});
