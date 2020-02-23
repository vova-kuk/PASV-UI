import Menu from "../../_PageObjects/Menu";
import LoginPage from "../../_PageObjects/LoginPage";
import LogoutPage from "../../_PageObjects/LogoutPage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import { student} from "../../_data/user.data";

describe ('GROUPS QUIZ TAB', () => {
    before('should login as student', () => {
        LoginPage.login(student);
        browser.pause(1000);
    });

    it('should check header is student name', () => {
        const element = Menu.h1;
        const actual = element.getText();
        const expected = 'Student PASV';
        expect(actual).equals(expected);
    });

    it('should click Groups link', () => {
        Menu.groupLink.click();
        browser.waitUntil(() => Menu.h1.getText() === 'Groups');
    });

    // it('should open last Created Group', function () {
    //     GroupsPage.lastCreatedGroup.click();
    // });

    // it('should click quiz Tab Btn', function () {
    //     GroupsPage.quizTabBtn.click();
    // });

});