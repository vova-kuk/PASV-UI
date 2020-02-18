import { expect } from 'chai';
import LoginPage from '../../user/login/LoginPage';
import NewCourseCreate from './NewCourseCreate';
import CourseStartPage from '../../courses/courses_start/CourseStartPage';

describe('START COURSE (as Admin)', () => {
    before(() => {
        LoginPage.login();
    });

    it('should create a new course', () => {
        NewCourseCreate.createNewCourse();
    });

    // it('should log out from Admin', () => {
    //     NewCourseCreate.createNewCourse();
    // });

    // it('should log in as Student', () => {
    //     NewCourseCreate.createNewCourse();
    // });

    it('should open the course', () => {
        CourseStartPage.createdCourseOpen();
    });

    it('should have a correct h1 equal to the name of the course', () => {
        const actual = CourseStartPage.h1.getText();
        const expected = 'PASV Project Course TEST2';
        expect(actual).eq(expected);
    });

    it('should start the course', () => {
        CourseStartPage.startCourse();
    });

    it('should display success message `Course loaded`', () => {
        const actual = CourseStartPage.successMessage.getText();
        const expected = 'Course loaded';
        expect(actual).eq(expected);
        browser.pause(6000);
    });

});