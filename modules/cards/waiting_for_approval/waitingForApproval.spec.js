import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import {student} from '../../user/login/loginRole_data';
import CardsTrainingPage from '../../_PageObjects/CardsTrainingPage';
import LoginPage from '../../_PageObjects/LoginPage';
import CardsWaitingForApprovalPage from '../../_PageObjects/CardsWaitingForApprovalPage';
import {positive} from '../create_new_card/newCard_data';
import Logout from '../../_PageObjects/LogoutPage';

describe('WAITING FOR APPROVAL', () => {
    before('login as a student', () => {
        LoginPage.loginRole(student);
    });

    it('should click `Cards` in the navigation bar', () => {
        ProfilePage.cardsLink.click();
        browser.pause(500);
    });

    it('should have a correct h1 title', () => {
        expect(FlashCardsPage.h1.getText()).eq('FlashCards')
    });

    it('should find group `Test Group` and click', () => {
        FlashCardsPage.linkToGroup.scrollIntoView();
        FlashCardsPage.linkToGroup.click();
        browser.pause(1000);
    });

    it('should check a group title',  () => {
        expect(CardsTrainingPage.title.getText()).equal('TestGroup');
    });

    it('should click `Waiting for approval` link', () => {
      FlashCardsPage.waitingForApproval.click();
      browser.pause(1000);
    });

    it('should verify `Waiting for approval` title', () =>{
        expect(CardsWaitingForApprovalPage.PageNameTitle.getText()).eq('Waiting for approval')
    });

    it('should click `Create new Card` button', () => {
        CardsWaitingForApprovalPage.CreateCard.click();
        browser.pause(500)
    });

    it('should verify a modal window title', () => {
        expect(CardsWaitingForApprovalPage.ModuleWindowTitle.getText()).eq('Create Flash Card')
    });

    it('should verify that `Question` text area is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowQuestion.isDisplayed())
    });

    it('should verify that `Answer` text area is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed())
    });

    it('should verify that `Create` button is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed())
    });

    it('should verify that `Close` button is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowClose.isDisplayed())
    });

    it('should fill in the `Question` text area', () => {
        FlashCardsPage.question.setValue(positive.questionText);
    });

    it('should fill in the `Answer` text area', () => {
        FlashCardsPage.answer.setValue(positive.answerText);
        browser.pause(300);
    });

    it('should check if `Create` button is enabled', () => {
        expect(FlashCardsPage.createBtn.isEnabled()).be.true;
    });

    it('should click `Create` button', () => {
        FlashCardsPage.createBtn.click();
        browser.pause(500);
    });

    it('should check if the card was created', () => {
        expect(FlashCardsPage.lastCreatedCard.getText()).equal(positive.questionText);
    });

    it('should check if the card has right `Question`', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardQuestion.getText()).eq(positive.questionText);
    });

    it('should check if the card has right `Answer`', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardAnswer.getText()).eq(positive.answerText);
    });

    it('should check if the card has right creator name', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardCreator.getText()).eq(Logout.logoutDropdown.getText());
    });

    it('should check if the card has right status', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardStatus.getText()).eq("new");
    });

});