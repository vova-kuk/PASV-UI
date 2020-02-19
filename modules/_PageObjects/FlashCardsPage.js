import AppPage from '../AppPage';
import {groupNameLink} from '../cards/create_new_card/newCard_data';


class FlashCardsPage extends AppPage {

    open() {
        super.open('https://stage.pasv.us/flash');
    }

    get h1() {
        return browser.$('//h1');
    }

    get description(){
        return browser.$('//div//p[@qa="flash-description"]');
    }

    openCardsMenu(){
        return browser.$('//li//a[contains(text(),"Cards")]');
    }

    get groupName() {
        return browser.$(groupNameLink);
    }

    get createNewCardBtn() {
        return browser.$('//button[text() = "Create new Card"]');
    }

    get modalForm() {
        return browser.$('//div[contains(@class, "sidepanel")]')
    }

    get modalFormTitle() {
        return browser.$('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]');
    }

    get question() {
        return browser.$('//textarea[@name = "question"]');
    }

    get answer() {
        return browser.$('//textarea[@name = "answer"]');
    }

    get createBtn() {
        return browser.$('//button[text() = "Create"]');
    }

    get titleOfCurrentGroup() {
        return browser.$('//h1');
    }

    get firstCreatedCard() {
        return browser.$('//div[@qa="flash-group-list "]//a');
    }

    get lastCreatedCard() {
        return browser.$('//div[@class = "pb-4 mb-4 border-bottom"]//strong[@class = "d-block mb-2"]');
    }

    get profileDropdown() {
        return browser.$('//a[@class = "dropdown-toggle nav-link"]');
    }

    get logoutLink() {
        return browser.$('// button[contains(text(), "Logout")]');
    }

    logout() {
        this.profileDropdown.click();
        this.logoutLink.click();
        browser.pause(1000);
    }

//testing one of the cards
    get h1LastCreated(){
        return browser.$('//h1');
    }

    get mainView() {
        return browser.$('//*[contains(text(),"Main view")]');
    }

    get compactView() {
        return browser.$('//*[contains(text(),"Compact view")]');
    }

    get waitingForApproval() {
        return browser.$('//*[contains(text(),"Waiting for approval")]');
    }

    get training() {
        return browser.$('//*[contains(text(),"Training")]');
    }

    get cardLastInList() {
        return browser.$('//div[@qa="flash-group-list "]//div[@qa="flash-group-item"][last()]//a');
    }

    get linkToGroup() {
        return browser.$('=TestGroup');
    }
}

export default new FlashCardsPage()