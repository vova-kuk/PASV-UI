import LoginPage from "../../_PageObjects/LoginPage";
import {admin, student} from '../../_data/user.data';
import CoursesPage from '../../_PageObjects/CoursesPage';
import ChallengePage from '../../_PageObjects/ChallengePage';
import {courseData} from '../../_PageObjects/CoursesPage';
import {challengeData} from '../../_PageObjects/ChallengePage';
import LogoutPage from "../../_PageObjects/LogoutPage";
import AppPage from "../../AppPage";


describe('ADD A NEW CHALLENGE TO CREATED COURSE --- POSITIVE ', () => {

    before('login as Admin', function () {
        LoginPage.login(admin);
    });

    it('create Challenge, create Course', () => {
        CoursesPage.createNewCourseMethod;
        ChallengePage.createNewChallengeMethod;
    });

    it('click on created course', () => {
        CoursesPage.open('https://stage.pasv.us/course');
        browser.pause(1000)
        const el = (`//ul[@class="list-group"]//a[contains(., "${courseData.name}")]`);
        $(el).click();
        browser.pause(1000)
    });

    it('click EDIT course', () => {
      const el = ('//a[@class="edit"]');
      $(el).click();
      browser.pause(3000)
    });

    it('should add created challenge to course', () => {

    });

    it('logout', () => {
        LogoutPage.logout()
    });

});


describe('STUDENT CHECK CHALLENGE IN COURSE --- POSITIVE', () => {

    before('login as Student, open created course', () => {
          LoginPage.login(student);
          browser.pause(1000)
        CoursesPage.open('https://stage.pasv.us/course')
          browser.pause(1000);
        const el = (`//ul[@class="list-group"]//a[contains(., "31 Course for adding Challenge")]`); // ${courseData.name}
        $(el).click();
        browser.pause(1000)
    });

    it('confirm h1', () => {
        const el = ('//h1');
        expect($(el).getText()).eq(courseData.name);
    });

    it('click button "Start course" ', () => {
      const el = ('//button[contains(., "Start course")]');
      $(el).click()
        browser.pause(1000)
    });

    it('should fill in correct solution in "Write your solution here" textarea', () => {
        const el = ('//div[@qa="initialSolution"]//textarea');
        $(el).setValue(challengeData.solution);
    });

    it('click "Validate solution" ', () => {
      const el = ('//button[contains(., "Validate solution")]');
      $(el).click();
      browser.pause(100)
    });

    it('confirm all tests passed', () => {
      const el = ('//div[@class="col-md-6"]//span[contains(., "Pass")]'); // return array
      console.log($(el).length);// selector "class="col-md-6" -- needs change
      expect($(el).length).eq(challengeData.testsQuantity); // check if all tests passed
    });

    it('should click button "Submit solution" ', () => {
        const el = ('//button[contains(., "Submit solution")]');
        $(el).click();
    });

    it('confirm notification wrapper  success ', () => {
      const el = ('//div[@class="notification notification-success notification-visible"]');
      $(el).isDisplayed();
    });

    it('confirm challenge marked as a "Completed"', () => {
      const el = ('//div[@class="mb-4 h5-"]//span[contains(., "Completed")]');
      $(el).isDisplayed();
    });


});