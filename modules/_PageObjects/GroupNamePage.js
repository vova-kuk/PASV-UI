import AppPage from '../AppPage';

class GroupNamePage extends AppPage {

    get h1() {
        return browser.$('//h1');
    }

    get lectureInTheList() {
        return browser.$('//a[@qa="link"]//span');
    }

    get video() {
        return browser.$('//div[@class="ytp-cued-thumbnail-overlay-image"]');
    }

    get dislikeBtn() {
        return browser.$('//h3//button[text()="Dislike"]');
    }

    get likeBtn() {
        return browser.$('//h3//button[text()="Like"]');
    }

    get markAsUnderstoodBtn() {
        return browser.$('//div//button[text()="Mark as understood"]');
    }

    get homeworkHeader() {
        return browser.$('//h3[text()="Homework"]');
    }

    get homeworkDescription() {
        return browser.$('//h3[text()="Homework"]//p');
    }

    get sendYourHomeworkToReviewField() {
        return browser.$('//textarea[@name="homework"]');
    }

    get sendHomeworkToReviewBtn() {
        return browser.$('//button[text()="Send homework to review"]');
    }

}

export default new GroupNamePage();