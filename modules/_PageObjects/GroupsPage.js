import AppPage from '../AppPage';
import {lectureName} from "../groups/group_lectures/groupLecturesMarkAsUnderstoodBtn.spec";

class GroupsPage extends AppPage {

    get groupsLink() {
        return browser.$('//a[@qa="groups-link"]');
    }

    get h1() {
        return browser.$('//h1');
    }

    get groupLink() {
        return browser.$('=QA 5 new Group');
    }

    // get lectureLink() {
    //     return browser.$();
    // }

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