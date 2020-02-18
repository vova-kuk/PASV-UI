import {expect} from 'chai';
import LoginPage from "../../_PageObjects/LoginPage";
import HomePage from "../../_PageObjects/HomePage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import GroupNamePage from "../../_PageObjects/GroupNamePage";
import GroupRatingPage from "../../_PageObjects/GroupsRatingPage";


describe('GROUP RATING TEST', () => {
    before(() => {
        LoginPage.loginAsStudent();
    });

    it ('should open Groups page', () => {
        HomePage.clickGroupsBtn();
        browser.pause(500);
    });

    it ('should check Group Page header', () => {
        expect(GroupsPage.h1.getText()).eq('Groups');
    });

    it ('should click group name in the list', () => {
        GroupsPage.clickGroupName();
    });

    it ('should verify header of Group Name Page', () => {
        expect(GroupNamePage.h1.getText()).eq('Group QA-7');
    });

    it ('should click rating button', () => {
        GroupRatingPage.clickLectureRatingBtn;
        browser.pause(3000)
    });

    it ('should check participants existence', () => {
        GroupRatingPage.participantExist;
    });

    //Also can check participant honor

    it ('should check participants honor exist', () => {
        GroupRatingPage.honorExist
    });

});