import {expect} from 'chai';
import FlashCardsPage from "../../_PageObjects/FlashCardsPage";
import LoginPage from "../../_PageObjects/LoginPage";


describe('NEW FLASH CARD CREATE', ()=> {
   before('should login as student', () => {
        LoginPage.login();
    });

    it('should open Flash Cards page', () => {
        FlashCardsPage.open();
    });

    it('should check if the group exists', function () {
        const actual = FlashCardsPage.GroupName;
        expect(actual).to.exist;
    });

    it('should click the link with Flash Group name', function () {
        FlashCardsPage.GroupName.click();
    });

    it('should click Waiting for approval link', function () {
        FlashCardsPage.WaitingForApproval.click();

    });

    it('should click Create new Card button', function () {
        FlashCardsPage.CreateNewCardBtn.click();
        browser.pause(2000);
    });

    it('should check if modal form is open', () => {
        const element = FlashCardsPage.ModalForm;
        expect(element.isDisplayed()).true;
    });

});