import {expect} from 'chai';
import LoginPage from "../../_PageObjects/LoginPage";
import HomePage from "../../_PageObjects/HomePage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import GroupNamePage from "../../_PageObjects/GroupNamePage";

describe('GROUP LECTURES', () => {
    before(() => {
        LoginPage.loginAsStudent();
    });

    it ('should click top menu Groups', () => {
        HomePage.clickGroupsBtn();
        browser.pause(500);
    });

    it ('should verify the header on Group Page is correct', () => {
        const actual = GroupsPage.h1.getText();
        const expected = 'Groups';
        expect(actual).eq(expected);
    });

    it ('should click group name in the list', () => {
        GroupsPage.clickGroupName();
        browser.pause(1000);
    });

    it ('should verify the header on Group Name Page is correct', () => {
        const actual = GroupNamePage.h1.getText();
        const expected = 'Group QA-7';
        expect(actual).eq(expected);
    });


});