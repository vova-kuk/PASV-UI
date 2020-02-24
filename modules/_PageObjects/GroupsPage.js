import AppPage from '../AppPage';

class GroupsPage extends AppPage {

    get groupsLink() {
        return browser.$('//a[@qa="groups-link"]');
    }

    get h1() {
        return browser.$('//h1');
    }

    get linkToGroup() {
        return browser.$('=QA 5 new Group');
    }

    get group4TestLink() {
        return $('//a[text()="Group4Test"]');
    }

    get linkToGroupGroup6Test() {
        return $('//a[contains(text(),"GROUP6 TEST")]');
    }

    get quizTabBtn(){
        return $('//a[contains(text(),"Quiz")]');
    }
}

export default new GroupsPage();