import {expect} from 'chai';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import LoginPage from '../../_PageObjects/LoginPage';
import {negative1} from './newCard_data';
import {student} from '../../user/login/loginRole_data';

describe('NEW FLASH CARD CREATE WITH EMPTY QUESTION', () => {
  before('should login as student', () => {
    LoginPage.loginRole(student);
  });

  it('should open Flash Cards page', () => {
    FlashCardsPage.open();
  });

  it('should check if the group exists', () => {
    const actual = FlashCardsPage.groupName;
    expect(actual).to.exist;
  });

  it('should click the link with Flash Group name', () => {
    FlashCardsPage.groupName.click();
  });

  it('should click Waiting for approval link', () => {
    FlashCardsPage.waitingForApproval.click();
  });

  it('should click Create new Card button', () => {
    FlashCardsPage.createNewCardBtn.click();
    browser.pause(2000);
  });

  it('should check if modal form is open', () => {
    const element = FlashCardsPage.modalForm;
    expect(element.isDisplayed()).true;
  });

  it('should check if a correct modal form is open', () => {
    const actual = FlashCardsPage.modalFormTitle.getText();
    const expected = 'Create Flash Card';
    expect(actual).equal(expected);
  });

  it('should fill in the Question field', () => {
    FlashCardsPage.question.setValue(negative1.questionText);
  });

  it('should fill in the Answer field', () => {
    FlashCardsPage.answer.setValue(negative1.answerText);
    browser.pause(3000);
  });

  it('should check if Create button is disabled', () => {
    const element = FlashCardsPage.createBtn.isEnabled();
    expect(element).be.false;
  });

  after('close the modal form and logout', () => {
    browser.$('//button[@class = "close"]').click();
    FlashCardsPage.logout();
    browser.pause(3000);
  })

});