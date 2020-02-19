import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import Logout from '../../_PageObjects/Logout';

import NewCourseCreatePage from './NewCourseCreatePage';
import CourseStartPage from '../../courses/courses_start/CourseStartPage';
import {courseCreate} from '../../courses/courses_start/courseStartData';
import {admin, student} from '../../user/login/loginRole_data';



describe('LOGIN AS ADMIN TO CREATE A COURSE', () => {
    before(() => {
        LoginPage.loginRole(admin);
    });

    it('should create a new course', () => {
        NewCourseCreatePage.courseCreate();
        browser.pause(1000);
    });

    it('should check the created course exists on the courses page', () => {
        const actual = NewCourseCreatePage.createdCourseTitle.getText();
        const expected = courseCreate.courseName;
        expect(actual).eq(expected);
    });

    it('should log out from Admin', () => {
        Logout.logout();
    });

});


describe('START THE COURSE (AS A STUDENT)', () => {
    before(() => {
        LoginPage.loginRole(student);
    });

    it('should go to courses page', () => {
        NewCourseCreatePage.open();
        browser.pause(1000);
    });

    it('should open the course', () => {
        CourseStartPage.createdCourseOpen();
        browser.pause(1000);
    });

    it('should have a correct h1 equal to the name of the course', () => {
        const actual = CourseStartPage.h1.getText();
        const expected = courseCreate.courseName;
        expect(actual).eq(expected);
        browser.pause(1000);
    });

    it('should start the course', () => {
        CourseStartPage.startCourse();
    });

    it('should display success message `Course loaded`', () => {
        const actual = CourseStartPage.successMessage.getText();
        const expected = 'Course loaded';
        expect(actual).eq(expected);
        browser.pause(2000);
    });

});

