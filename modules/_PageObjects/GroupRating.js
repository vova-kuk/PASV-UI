import AppPage from '../AppPage';

class GroupRating extends AppPage {

    get linkToGroup() {
        return $('=Group4Test');
    }

    get ratingLink() {
        return $('=Rating');
    }

    get h1 () {
        return $('//h1');
    }

    get ratingTable() {
        return $('.rt-table');
    }

}

export default new GroupRating();
