import AppPage from '../AppPage';

class GroupDescriptionPage extends AppPage {

    get h1GroupPage () {
        return browser.$('//h1');
    }

    get groupQa7 () {
        return browser.$('[href="/group/5e4aaec4ecdfb5003c383a0e/lecture"]');
    };

    get qa7Description () {
        return browser.$('[href="/group/5e4aaec4ecdfb5003c383a0e/description"]');
    };


};

export default new GroupDescriptionPage();