import AppPage from "../AppPage";

class GroupsPage extends AppPage {
    get h1() {
        return browser.$('//h1');
    }

    clickGroupName() {
        browser.$('//div[@qa="group-list"]//a').click();
    }
}

export default new GroupsPage();