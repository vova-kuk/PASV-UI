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

    })

    it('facebook', () => {
        expect(GroupRatingPage.facebookLink.getAttribute('href')).eq('https://www.facebook.com/');
        expect(GroupRatingPage.facebookLink.getAttribute('target')).eq('_blank');
        browser.pause(1000)
    });

    it('LinkedIn', () => {
        expect(GroupRatingPage.LinkedInLink.getAttribute('href')).eq('https://www.linkedin.com/in/volodymyr-kuk-b789b61a0/');
        expect(GroupRatingPage.LinkedInLink.getAttribute('target')).eq('_blank');
        browser.pause(1000)
    });

    it('LinkedIn', () => {
        expect(GroupRatingPage.gitHubLink.getAttribute('href')).eq('https://github.com/');
        expect(GroupRatingPage.gitHubLink.getAttribute('target')).eq('_blank');
        browser.pause(1000)
    });

    it('Codewars', () => {
        expect(GroupRatingPage.codewarsLink.getAttribute('href')).eq('https://www.codewars.com/users/Vova%20Kuk');
        expect(GroupRatingPage.codewarsLink.getAttribute('target')).eq('_blank');
        browser.pause(1000)
    });


});