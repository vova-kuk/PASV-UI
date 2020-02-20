import {expect} from 'chai';
import ProfilePage from '../../_PageObjects/ProfilePage';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import {student} from "../../user/login/loginRole_data";
import CardsTrainingPage from "../../_PageObjects/CardsTrainingPage";
import LoginPage from "../../_PageObjects/LoginPage";
import CardsWaitingForApprovalPage from "../../_PageObjects/CardsWaitingForApprovalPage"
import {positive} from "../create_new_card/newCard_data";

describe('WAITING FOR APPROVAL', () => {
    before('login as a student', () => {
        LoginPage.loginRole(student);
    });

    it('should click main menu "Cards" link', () => {
        ProfilePage.cardsLink.click();
        browser.pause(500);
    });

    it('should have correct h1 title', () => {
        expect(FlashCardsPage.h1.getText()).eq('FlashCards')
    });

    it('should find group "Test Group" and click', () => {
        FlashCardsPage.linkToGroup.scrollIntoView();
        FlashCardsPage.linkToGroup.click();
        browser.pause(1000);
    });

    it('should check Group title',  () => {
        expect(CardsTrainingPage.title.getText()).equal('TestGroup');
    });

    it('should click "Waiting for approval" link', () => {
      FlashCardsPage.waitingForApproval.click();
      browser.pause(1000);
    });

    it('should verify "Waiting for approval" title', () =>{
        expect(CardsWaitingForApprovalPage.PageNameTitle.getText()).eq('Waiting for approval')
    });

    it('should click "Create new Card" button', () => {
        CardsWaitingForApprovalPage.CreateCard.click()
        browser.pause(500)
    });

    it('should verify module window title', () => {
        expect(CardsWaitingForApprovalPage.ModuleWindowTitle.getText()).eq('Create Flash Card')
    });

    it('should verify that Question textarea is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowQuestion.isDisplayed())
    });

    it('should verify that Answer textarea is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed())
    });

    it('should verify that Create button is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowAnswer.isDisplayed())
    });

    it('should verify that Close button is present', () =>{
        expect(CardsWaitingForApprovalPage.ModuleWindowClose.isDisplayed())
    });

    it('should fill in the Question field', () => {
        FlashCardsPage.question.setValue(positive.questionText);
    });

    it('should fill in the Answer field', () => {
        FlashCardsPage.answer.setValue(positive.answerText);
        browser.pause(300);
    });

    it('should check if Create button is enabled', () => {
        expect(FlashCardsPage.createBtn.isEnabled()).be.true;
    });

    it('should click Create button', () => {
        FlashCardsPage.createBtn.click();
        browser.pause(500);
    });

    it('should check if the card was created', () => {
        expect(FlashCardsPage.lastCreatedCard.getText()).equal(positive.questionText);
    });

    it('should check if the card has right Question', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardQuestion.getText(), positive.questionText);
    });

    it('should check if the card has right Answer', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardAnswer.getText(), positive.answerText);
    });

    it('should check if the card has right Creator name', () => {
        expect(CardsWaitingForApprovalPage.lastCreatedCardCreator.getText(), CardsWaitingForApprovalPage.userName.getText());
    })
});