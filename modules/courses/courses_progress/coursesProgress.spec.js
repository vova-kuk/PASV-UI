import { expect } from 'chai';
import CoursesProgressPage from '../../_PageObjects/CoursesProgressPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('COURSES PROGRESS PAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should click `Courses` link', () => {
        const element = CoursesProgressPage.coursesLink;
        element.click();
    });

    it('should click `Progress` link', () => {
        const element = CoursesProgressPage.progressLink;
        element.click();
    });

    it('should go to `Course Report` page', () => {
        expect(CoursesProgressPage.h1.getText()).equal('Course Report');
    });

    it('should click `Completed Lessons` button', () => {
        const element = CoursesProgressPage.completedLessonsBtn;
        element.click();
    });

    it('should click link `Profile` page', () => {
        const element = CoursesProgressPage.profilePageLink;
        element.click();
    });

    it('should go to `Profile` page', () => {
        expect(CoursesProgressPage.h1.getText()).equal('Test Testov');
    });

});


