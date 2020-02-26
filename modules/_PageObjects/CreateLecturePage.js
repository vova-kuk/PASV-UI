import AppPage from './AppPage';
import LoginPage from '../user/_page/LoginPage';
import { admin } from '../user/_data/user.data';
import GroupsPage from './GroupsPage';
import GroupNamePage from './GroupNamePage';
//import {lectureName} from "../groups/group_lectures/groupLecturesMarkAsUnderstoodBtn.spec";
import LogoutPage from '../user/_page/LogoutPage';
const lectureName = Math.random() + 'lecture';

class CreateLecturePage extends AppPage {
  get h3() {
    return browser.$('//div//h3[@qa="lecture-create-edit-title"]');
  }

  get lectureNameField() {
    return browser.$('//input[@name="name"]');
  }

  get videoLink() {
    return browser.$('//input[@name="video"]');
  }

  get dateField() {
    return browser.$('//input[@placeholder="Date"]');
  }

  get saveBtn() {
    return browser.$('//button[@type="submit"]');
  }

  get homeworkField() {
    return browser.$('//textarea[@name="homework"]');
  }

  createNewLecture() {
    LoginPage.login(admin);
    GroupsPage.groupsLink.click();
    browser.pause(500);
    GroupsPage.groupLink.scrollIntoView();
    GroupsPage.groupLink.click();
    browser.pause(500);
    GroupNamePage.createLectureBtn.click();
    this.lectureNameField.setValue(lectureName);
    browser.pause(1000);
    this.videoLink.setValue('https://youtu.be/mHNng3hb4co');
    browser.pause(500);
    this.dateField.setValue('02.25.2020');
    this.homeworkField.setValue('abcdefg');
    browser.pause(500);
    this.saveBtn.click();
    browser.pause(500);
    LogoutPage.logout();
  }
}

export default new CreateLecturePage();
export { lectureName };
