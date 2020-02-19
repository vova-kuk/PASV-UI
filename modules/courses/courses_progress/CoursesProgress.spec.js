import { expect } from 'chai';
import CoursesProgressPage from '../../_PageObjects/CoursesProgressPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('COURSES PROGRESS PAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should choose click link Courses', () => {
        const element = CoursesProgressPage.coursesLink;
        element.click();
        browser.pause(3000);
    });

    it('should open course progress url', function () {
        browser.url('https://stage.pasv.us/course/5deb5af855f2b4003c545112/report');
        browser.pause(3000);
    });

    // it('should choose click link Progress', () => {
    //     const element = CoursesProgressPage.progressLink;
    //     element.click();
    //     browser.pause(3000);
    // });

    it('should go to courses progress page', () => {
        browser.pause(3000);
        expect(CoursesProgressPage.h1.getText()).equal('Course Report');
    });

});


