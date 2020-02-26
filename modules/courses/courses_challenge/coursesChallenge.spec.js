import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import { admin, student } from '../../user/_data/user.data';
import CoursesPage from '../../_page/CoursesPage';
import ChallengePage from '../../_page/ChallengePage';
import { courseData } from '../../_page/CoursesPage';
import { challengeData } from '../../_page/ChallengePage';
import Notification from '../../_page/Notification';
import Menu from '../../_page/Menu';

describe('ADD A NEW CHALLENGE TO CREATED COURSE ', () => {
  before('should login as Admin, create Course, create Challenge', () => {
    LoginPage.login(admin);
    CoursesPage.createNewCourseGlobal;
    ChallengePage.createNewChallengeGlobal;
    browser.pause(1000);
  });

  it('should find and click on created course', () => {
    CoursesPage.open('https://stage.pasv.us/course');
    $(CoursesPage.listOfCourses).click();
    browser.pause(1000);
  });

  it('should click EDIT course', () => {
    $(CoursesPage.editBtn).click();
    browser.pause(1000);
  });

  it('should add created challenge to course', () => {});

  it('should logout', () => {
    LogoutPage.logout();
  });
});

describe('STUDENT CHECK CHALLENGE IN COURSE --- POSITIVE', () => {
  before('should login as Student, open created course', () => {
    LoginPage.login(student);
    CoursesPage.open('https://stage.pasv.us/course');
    browser.pause(1000);
  });

  it('should click on created course ', () => {
    $(CoursesPage.findCourse).click();
    browser.pause(1000);
  });

  it('should confirm h1', () => {
    expect($(Menu.h1).getText()).eq(courseData.name);
  });

  it('should confirm describe', () => {
    expect($(CoursesPage.courseDescription).getText()).eq(courseData.description);
  });

  it('should click button "Start course" ', () => {
    $(CoursesPage.startCourseBtn).click();
    browser.pause(1000);
  });

  it('should confirm challenge exist on the page and has same name as created', () => {
    expect(ChallengePage.challengeInsideCourseName.getText()).eq(challengeData.name);
  });

  it('should fill in correct solution in "Write your solution here" textarea', () => {
    $(ChallengePage.challengeInsideCourseTextarea).setValue(challengeData.solution);
  });

  it('should click "Validate solution" ', () => {
    $(ChallengePage.challengeInsideCourseValidateBtn).click();
    browser.pause(1000);
  });

  it('should confirm all tests passed', () => {
    expect($(ChallengePage.challengePassArray).length).eq(challengeData.testsQuantity);
  });

  it('should click button "Submit solution" ', () => {
    $(ChallengePage.challengeSubmitSolutionBtn).click();
  });

  it('should confirm success notification wrapper is Displayed', () => {
    $(Notification.success).isDisplayed();
  });

  it('should confirm challenge marked as a "Completed"', () => {
    $(ChallengePage.challengeCompleteMark).isDisplayed();
  });
});
