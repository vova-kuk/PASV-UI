import {expect} from 'chai';
import LoginPage from "../../_PageObjects/LoginPage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import GroupNamePage from "../../_PageObjects/GroupNamePage";
import {student} from "../../_data/user.data";
import {groupsLectures} from '../../_data/groupsLectures.data.js';


describe('GROUPS LECTURES', () => {
    before(() => {
        LoginPage.login(student);
    });

    it ('should click top menu Groups', () => {
        GroupsPage.groupsLink.click();
        browser.pause(500);
    });

    it ('should verify the header on Group Page is correct', () => {
        const actual = GroupsPage.h1.getText();
        const expected = groupsLectures.groupsHeader;
        expect(actual).eq(expected);
    });

    it ('should click group name in the list', () => {
        GroupsPage.linkToGroup.scrollIntoView();
        GroupsPage.linkToGroup.click();
        browser.pause(1000);
    });

    it ('should verify the header on Group Name Page is correct', () => {
        const actual = GroupNamePage.h1.getText();
        const expected = groupsLectures.groupNameHeader;
        expect(actual).eq(expected);
    });

    it ('should choose lecture in the list', () => {
        GroupNamePage.lectureInTheList.click();
        browser.pause(1000);
    });

    it('should verify video is displaying', () => {
        GroupNamePage.video.isDisplayed();
        browser.pause(1000);
    });

    it('should click Dislike button', () => {
        GroupNamePage.dislikeBtn.click();
    });

    it('should click Like button', () => {
        GroupNamePage.likeBtn.click();
    });

    it('should check Homework header', () => {
        const actual = GroupNamePage.homeworkHeader.getText();
        const expected = groupsLectures.homeworkHeader;
        expect(actual).eq(expected);
    });

    it ('should check Homework description is existing', () => {
        GroupNamePage.homeworkDescription.isExisting();
    });

    it ('should fill out Send your Homework to review field', () => {
        GroupNamePage.sendYourHomeworkToReviewField.setValue(groupsLectures.homeworkInput);
    });

    it ('should click Send homework to review', () => {
        GroupNamePage.sendHomeworkToReviewBtn.click();
    });

});
