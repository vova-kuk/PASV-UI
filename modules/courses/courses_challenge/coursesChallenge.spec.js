import LoginPage from "../../_PageObjects/LoginPage";
import LogoutPage from "../../_PageObjects/LogoutPage";
import {admin, student} from '../../_data/user.data';
import CoursesPage from '../../_PageObjects/CoursesPage';
import ChallengePage from '../../_PageObjects/ChallengePage';
import {courseData} from '../../_PageObjects/CoursesPage';
import {challengeData} from '../../_PageObjects/ChallengePage';
import AppPage from "../../AppPage";
import Notification from "../../_PageObjects/Notification";

/*
describe('ADD A NEW CHALLENGE TO CREATED COURSE ', () => {

    before('login as Admin, create Course, create Challenge', () => {
        LoginPage.login(admin);
        CoursesPage.createNewCourseMethod;
        ChallengePage.createNewChallengeMethod;
    });

    it('find and click on created course', () => {
        CoursesPage.open('https://stage.pasv.us/course');
        $(CoursesPage.listOfCourses).click();
        browser.pause(1000)
    });

    it('click EDIT course', () => {
        $(CoursesPage.editBtn).click();
        browser.pause(1000)
    });

    it('should add created challenge to course', () => {

    });

    it('logout', () => {
        LogoutPage.logout();
    });

});

*/
describe('STUDENT CHECK CHALLENGE IN COURSE --- POSITIVE', () => {

    before('login as Student, open created course', () => {
        LoginPage.login(student);
        CoursesPage.open('https://stage.pasv.us/course');
        browser.pause(1000)

    });

    it('should click on created course ', () => {
        $(CoursesPage.findCourse).click();
        browser.pause(1000)
    });


    it('confirm h1', () => {
        expect($(AppPage.h1).getText()).eq(courseData.name);
    });

    it('confirm describe', () => {
        expect($(CoursesPage.courseDescription).getText()).eq(courseData.description);
    });

    it('click button "Start course" ', () => {
        $(CoursesPage.startCourseBtn).click();
        browser.pause(1000);
    });

    it('confirm challenge exist on the page and has same name as created', () => {
        expect(ChallengePage.challengeInsideCourseName.getText()).eq(challengeData.name);
    });

    it('should fill in correct solution in "Write your solution here" textarea', () => {
        $(ChallengePage.challengeInsideCourseTextarea).setValue(challengeData.solution);
    });

    it('click "Validate solution" ', () => {
        $(ChallengePage.challengeInsideCourseValidateBtn).click();
        browser.pause(1000)
    });

    it('confirm all tests passed', () => {
        expect($(ChallengePage.challengePassArray).length).eq(challengeData.testsQuantity);
    });

    it('should click button "Submit solution" ', () => {
        $(ChallengePage.challengeSubmitSolutionBtn).click();
    });

    it('confirm notification wrapper success ', () => {
        $(Notification.success).isDisplayed();
    });

    it('confirm challenge marked as a "Completed"', () => {
        $(ChallengePage.challengeCompleteMark).isDisplayed();
    });


});