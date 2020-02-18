import AppPage from '../AppPage';

class GroupsRatingPage extends AppPage{

    get clickLectureRatingBtn () {
        $('a=Rating').click()
    }

    get participantExist() {
        $('//a[@class="mr-2"]').isExisting()
    }

    get honorExist() {
        $('//div[@class=\'rt-tr -odd\']/div[3]').isExisting()
    }

    open(){
        super.open('https://stage.pasv.us/group/5e4aaec4ecdfb5003c383a0e/lecture');
    }
}

export default new GroupsRatingPage();