import {expect} from "chai";
import GroupRatingPage from "../../_PageObjects/GroupRatingPage";
import LoginPage from "../../_PageObjects/LoginPage";
import {student} from "../../_data/user.data";
import Menu from "../../_PageObjects/Menu";

describe('GROUP RATING', () => {
    before('ligin as student', () => {
        LoginPage.login(student);
    });

    it('should click menu "Groups" link', () => {
        Menu.groupLink.click();
    });

    it('should click "Group4Test" link', () => {
        GroupRatingPage.group4Test.scrollIntoView();
        GroupRatingPage.group4Test.click();
    });

    it('should verify h1 is Group --Group4Test', () => {
       browser.waitUntil(() =>{
           return GroupRatingPage.h1.getText() === 'Group Group4Test';
       },5000)

    });

    it('should click "Rating" link', () => {
        GroupRatingPage.ratingLink.click();
    });

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