import CoursesProgressPage from '../../_PageObjects/CoursesProgressPage';
import LoginPage from '../../_PageObjects/LoginPage';
import {student} from "../../_data/user.data";
import ProfilePage from "../../_PageObjects/ProfilePage";
import Menu from "../../_PageObjects/Menu";
import {data} from "../../_data/profilePage.data";

describe('COURSES PROGRESS PAGE', () => {
    before(() => {
        LoginPage.login(student);
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
        ProfilePage.goToProfilePage();
        browser.pause(1000);
    });

    it('should go to `Profile` page', () => {
        expect(Menu.h1.getText()).equal(data.student.name);
    });

});


