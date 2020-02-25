import AppPage from '../AppPage';
import LoginPage from "./LoginPage";
import {admin} from "../_data/user.data";
import GroupsPage from "./GroupsPage";
import GroupNamePage from "./GroupNamePage";
import {lectureName} from "../groups/group_lectures/groupLecturesMarkAsUnderstoodBtn.spec";
import LogoutPage from "./LogoutPage";

class CreateLecturePage extends AppPage {

    get h3() {
        return browser.$('//div//h3[@qa="lecture-create-edit-title"]');
    }

    get lectureNameField() {
        return browser.$('//input[@name="name"]');
    }

    get dateField() {
        return browser.$('//input[@placeholder="Date"]');
    }

    get saveBtn() {
        return browser.$('//button[@type="submit"]');
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
        this.dateField.setValue('02.24.2020');
        this.saveBtn.click();
        browser.pause(500);
        LogoutPage.logout();
    }
}

export default new CreateLecturePage();