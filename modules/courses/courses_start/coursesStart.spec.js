import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';
import Logout from '../../_PageObjects/LogoutPage';

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
    });

    it('should open the course', () => {
        CourseStartPage.createdCourseOpen();
    });

    it('should have a correct h1 equal to the name of the course', () => {
        const actual = CourseStartPage.h1.getText();
        const expected = courseCreate.courseName;
        expect(actual).eq(expected);
    });

    it('should start the course', () => {
        CourseStartPage.startCourse();
    });

    it('should display success message `Course loaded`', () => {
        const actual = CourseStartPage.successMessage.getText();
        const expected = 'Course loaded';
        expect(actual).eq(expected);
    });

});

