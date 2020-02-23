import {expect} from 'chai';
import {student} from '../../_data/user.data';
import LoginPage from '../../_PageObjects/LoginPage';
import HomePage from "../../_PageObjects/HomePage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import GroupRating from "../../_PageObjects/GroupRating";

describe('GROUP RATING', () => {
    before('login as a student', () => {
        LoginPage.login(student);
    });

    it ('should click menu "Groups" link', () => {
        HomePage.clickGroupsBtn();
        browser.waitUntil(() => {
            return GroupsPage.h1.getText() === 'Groups'
        }, 500);
    });

    it ('should click "Group4Test" link', () => {
        GroupRating.linkToGroup.scrollIntoView();
        GroupRating.linkToGroup.click();

    })

});