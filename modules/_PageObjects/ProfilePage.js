import AppPage from '../AppPage';

class ProfilePage extends AppPage{

    get createDayReportBtn(){
        return $('//a[@class=\'btn btn-secondary\']');
    }

    get likeBtn () {
        return $('//button[@class=\'btn btn-outline-primary btn-sm\']');
    }

    get likeNotification () {
        return $('//h4[@class=\'notification-title\']');
    }

    get updateListBtn () {
        return $('//button[@class=\'btn btn-secondary\']');
    }

    get updateListNotification () {
        return $('//h4[@class=\'notification-title\']');
    }

    get codeWarsIcon () {
        return $('//a[3]//img[1]');
    }

    get facebookIcon () {
        return $('//a[1]//img[1]');
    }

    get linkedInIcon () {
        return $('//a[2]//img[1]');
    }

    get coinTotal () {
        return $('//div[@qa="user-achievement"]//span');
    }

    get coinTotalTopRight () {
        return $('//div[@class="justify-content-end collapse navbar-collapse"]//span');
    }

    goToProfilePage(){
        super.click('//a[@class="dropdown-toggle nav-link"]');
        super.click('//button[contains(text(), "Profile")]');
    }

}

export default new ProfilePage();

