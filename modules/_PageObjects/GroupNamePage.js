import AppPage from "../AppPage";

class GroupNamePage extends AppPage {
    get h1() {
        return browser.$('//h1');
    }
}

export default new GroupNamePage();