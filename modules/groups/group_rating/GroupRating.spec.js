import {expect} from 'chai';
import {student} from '../../_data/user.data';
import LoginPage from '../../_PageObjects/LoginPage';
import Menu from "../../_PageObjects/Menu";
import GroupsPage from "../../_PageObjects/GroupsPage";
import GroupRating from "../../_PageObjects/GroupRating";

describe('GROUP RATING', () => {
    before('login as a student', () => {
        LoginPage.login(student);
    });

    it ('should click menu "Groups" link', () => {
        Menu.groupLink.click();
        browser.waitUntil(() => {
            return GroupsPage.h1.getText() === 'Groups'
        }, 500);
    });

    it ('should click "Group4Test" link', () => {
        GroupRating.linkToGroup.scrollIntoView();
        GroupRating.linkToGroup.click();
        browser.waitUntil(() => {
            return GroupRating.h1.getText() === 'Group Group4Test'
        }, 500);
    });

    it ('should click Rating link', () => {
        GroupRating.ratingLink.click();
        GroupRating.ratingTable.waitForDisplayed(5000);
    })

});