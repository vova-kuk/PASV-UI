import LoginPage from "../../_PageObjects/LoginPage";
import {admin} from "../../user/login/loginRole_data";
import Courses from "../Courses";

describe('CREATE A NEW COURSE AS ADMIN', () => {

    it('should login as admin', ()=> {
         LoginPage.loginRole(admin);
    });

    it('should open course url', function () {
        browser.url('https://stage.pasv.us/course');
    });

    it('should click Create new Course button', function () {
        Courses.createNewCourseBtn.click();
        browser.pause(1000)
    });

    it('should fill in Course name field', function () {
        Courses.courseName.setValue('1_Course for Challenge');
    });

    it('should fill in Course description field', function () {
        Courses.courseDescription.setValue('description');
    });

    it('should select All in Access type', function () {
        Courses.accessType.selectByAttribute('value', 'all');
    });

    it('should click Create button', function () {
        Courses.createBtn.click();
        browser.pause(1000)
    });

});