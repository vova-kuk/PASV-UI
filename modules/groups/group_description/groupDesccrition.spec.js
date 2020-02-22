import LoginPage from '../../_PageObjects/LoginPage';
import GroupDescriptionPage from '../../_PageObjects/GroupDescriptionPage';
import { expect } from "chai";
import Menu from "../../_PageObjects/Menu";


describe('Group description', () => {
    before(() => {
        LoginPage.login();
    });

    it('should click group button',  () =>{
         Menu.groupLink.click();
        browser.pause(2000);
    });

    it('should have a correct page title', () => {
        const actual = GroupDescriptionPage.h1GroupPage.getText();
        const expected = 'Groups';
        expect(actual).equal(expected);
    });

    it('should find qa-7 group',  () =>{
        GroupDescriptionPage.groupQa7.click();
        browser.pause(2000);
    });

    it('should have a correct page title', () => {
        const actual = GroupDescriptionPage.h1GroupPage.getText();
        const expected = "Group QA-7";
        expect(actual).equal(expected);
    });

    it('should open qa-7 description page',  () =>{
        GroupDescriptionPage.qa7Description.click();
        browser.pause(3000);
    });

    it('should have a correct page title', () => {
        const actual = GroupDescriptionPage.h1GroupPage.getText();
        const expected = "Group QA-7";
        expect(actual).equal(expected);
    });


});