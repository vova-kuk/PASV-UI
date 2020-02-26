import LoginPage from '../../user/_page/LoginPage';
import GroupsPage from '../../_PageObjects/GroupsPage';
import GroupNamePage from '../../_PageObjects/GroupNamePage';
import { student } from '../../user/_data/user.data';
import { groupsLectures } from '../../_data/groupsLectures.data.js';
import CreateLecturePage from '../../_PageObjects/CreateLecturePage';
import { lectureName } from '../../_PageObjects/CreateLecturePage';

describe('CLICK MARK AS UNDERSTOOD BUTTON AS A STUDENT', () => {
  before('should create new lecture and login as Student', () => {
    CreateLecturePage.createNewLecture();
    browser.pause(500);
    LoginPage.login(student);
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
    browser.pause(1000);
  });

  it('should click Mark as understood button', () => {
    GroupNamePage.markAsUnderstoodBtn.click();
  });
});
