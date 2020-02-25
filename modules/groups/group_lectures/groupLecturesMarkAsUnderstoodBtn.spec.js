import LoginPage from "../../_PageObjects/LoginPage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import GroupNamePage from "../../_PageObjects/GroupNamePage";
import {admin, student} from "../../_data/user.data";
import {groupsLectures} from '../../_data/groupsLectures.data.js';
import CreateLecturePage from "../../_PageObjects/CreateLecturePage";
import LogoutPage from "../../_PageObjects/LogoutPage";
const lectureName = Math.random() + 'lecture';

describe('CREATE NEW LECTURE AS AN ADMIN', () => {
    before(() => {
        LoginPage.login(admin);
    });

    after(() => {
        LogoutPage.logout();
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
        GroupsPage.groupLink.scrollIntoView();
        GroupsPage.groupLink.click();
        browser.pause(1000);
    });

    it ('should verify the header on Group Name Page is correct', () => {
        const actual = GroupNamePage.h1.getText();
        const expected = groupsLectures.groupNameHeader;
        expect(actual).eq(expected);
    });

   it ('should click Create lecture button', () => {
        GroupNamePage.createLectureBtn.click();
   });

    it ('should verify header is correct', () => {
        const actual = CreateLecturePage.h3.getText();
        const expected = 'Create lecture';
        expect(actual).eq(expected);
    });

    it ('should fill out Lecture name field', () => {
        CreateLecturePage.lectureNameField.setValue(lectureName);
    });

    it ('should fill out Date field', () => {
        CreateLecturePage.dateField.setValue('02.24.2020');
    });

    it ('should click Save button', () => {
        CreateLecturePage.saveBtn.click();
        browser.pause(2000);
    });
});

describe('CLICK MARK AS UNDERSTOOD BUTTON AS A STUDENT', () => {
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
        GroupsPage.groupLink.scrollIntoView();
        GroupsPage.groupLink.click();
        browser.pause(1000);
    });

    it ('should verify the header on Group Name Page is correct', () => {
        const actual = GroupNamePage.h1.getText();
        const expected = groupsLectures.groupNameHeader;
        expect(actual).eq(expected);
    });

    it ('should choose lecture in the list', () => {
        GroupsPage.lectureLink(lectureName).scrollIntoView();
        GroupsPage.lectureLink(lectureName).click();
        browser.pause(1000);
    });

    it('should click Mark as understood button', () => {
        GroupNamePage.markAsUnderstoodBtn.click();
    });
});

export {lectureName};
