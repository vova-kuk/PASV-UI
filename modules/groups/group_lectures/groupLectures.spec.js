import LoginPage from '../../user/_page/LoginPage';
import GroupsPage from '../_page/GroupsPage';
import GroupNamePage from '../_page/GroupNamePage';
import { student } from '../../user/_data/user.data';
import { groupsLectures } from '../_data/groupsLectures.data.js';
import CreateLecturePage from '../../_page/CreateLecturePage';
import { lectureName } from '../../_page/CreateLecturePage';

describe('GROUPS LECTURES', () => {
  before(() => {
    CreateLecturePage.createNewLecture();
    LoginPage.login(student);
    browser.pause(500);
  });

  it('should click top menu Groups', () => {
    GroupsPage.groupsLink.click();
    browser.pause(500);
  });

  it('should verify the header on Group Page is correct', () => {
    const actual = GroupsPage.h1.getText();
    const expected = groupsLectures.groupsHeader;
    expect(actual).eq(expected);
  });

  it('should click group name in the list', () => {
    GroupsPage.groupLink.scrollIntoView();
    GroupsPage.groupLink.click();
    browser.pause(1000);
  });

  it('should verify the header on Group Name Page is correct', () => {
    const actual = GroupNamePage.h1.getText();
    const expected = groupsLectures.groupNameHeader;
    expect(actual).eq(expected);
  });

  it('should choose lecture in the list', () => {
    GroupsPage.lectureLink(lectureName).scrollIntoView();
    GroupsPage.lectureLink(lectureName).click();
    browser.pause(3000);
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

  it('should check Homework description is existing', () => {
    GroupNamePage.homeworkDescription.isExisting();
  });

  it('should fill out Send your Homework to review field', () => {
    GroupNamePage.sendYourHomeworkToReviewField.setValue(groupsLectures.homeworkInput);
    browser.pause(1000);
  });

  it('should click Send homework to review', () => {
    GroupNamePage.sendHomeworkToReviewBtn.click();
    browser.pause(1000);
  });

  it('should fill out Comment field', () => {
    GroupNamePage.commentField.setValue('abcdefg');
    browser.pause(500);
  });

  it('should click Add comment button', () => {
    GroupNamePage.addCommentBtn.click();
  });
});
