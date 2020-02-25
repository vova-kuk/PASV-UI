import Menu from '../../_PageObjects/Menu';
import LoginPage from '../../_PageObjects/LoginPage';
import ProfilePage from '../../_PageObjects/ProfilePage';
import CoursesProgressPage from '../../_PageObjects/CoursesProgressPage';
import { data } from '../../_data/profilePage.data';
import { admin, student } from '../../_data/user.data';
import LogoutPage from '../../_PageObjects/LogoutPage';

// this test will be refactored once Create New Course method is proper
describe('COURSES PROGRESS PAGE', () => {
  before(() => {
    LoginPage.login(student);
    browser.pause(1000);
  });

  it('should click Courses link', () => {
    Menu.coursesLink.click();
  });

  it('should click Progress link', () => {
    const element = CoursesProgressPage.progressLink;
    element.click();
  });

  it('should go to `Course Report` page', () => {
    expect(Menu.h1.getText()).equal('Course Report');
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

  after('should logout', () => {
    LogoutPage.logout();
  });
});
