import LoginPage from '../../user/_page/LoginPage';
import CoursesList from './CoursesList';
import { student } from '../../user/_data/user.data';
import Menu from '../../_PageObjects/Menu';

describe('COURSE LIST', () => {
  before('loginAsStudent', () => {
    LoginPage.login(student);
  });

  it('should click top menu Courses', () => {
    Menu.coursesLink.click();
  });

  it('should have correct title', () => {
    expect(Menu.h1.getText()).eq('Courses');
  });

  it('should click first item in the course list', () => {
    CoursesList.name1.click();
    browser.waitUntil(() => Menu.h1.getText() === 'JS');
    browser.back();
  });

  it('should have description about course', () => {
    expect(CoursesList.description1.getText()).eq('JavaScript');
  });

  it('should click Progress of first course', () => {
    CoursesList.progress1.click();
    browser.waitUntil(() => Menu.h1.getText() === 'Course Report');
    browser.back();
  });

  it('should click 50th item in the course list', () => {
    CoursesList.name50.click();
    browser.waitUntil(() => Menu.h1.getText() === 'JavaScript. Arrays');
    browser.back();
  });

  it('should have description about course', () => {
    expect(CoursesList.description50.getText()).eq('JavaScript. Arrays');
  });

  it('should click Progress of 50th course', () => {
    CoursesList.progress50.click();
    browser.waitUntil(() => Menu.h1.getText() === 'Course Report');
    browser.back();
  });
});
