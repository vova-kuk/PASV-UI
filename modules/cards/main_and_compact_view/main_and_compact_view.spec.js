import {expect} from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import {student} from '../../user/login/loginRole_data';
import {pageTestData} from './main_and_compact_view_data';
import {groupNameLink} from "../create_new_card/newCard_data";

describe('MAIN AND COMPACT VIEW', () => {
    it('should log into user account', () => {
        LoginPage.loginRole(student);
    });

    it('should go to Cards page', () => {
        FlashCardsPage.open();
        browser.pause(2000);
        expect(pageTestData.title).equal(FlashCardsPage.h1.getText());
    });

    it('should go to Group\'s page', () => {
        browser.$(groupNameLink).click();
        browser.pause(2000);
        expect(pageTestData.groupName).equal(FlashCardsPage.h1.getText());
    });

});
