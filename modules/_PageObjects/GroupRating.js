import AppPage from '../AppPage';

class GroupRating extends AppPage {

    get linkToGroup() {
        return browser.$('=Group4Test');
    }

}

export default new GroupRating();
