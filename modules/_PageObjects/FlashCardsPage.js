import AppPage from '../AppPage';
import { groupName} from "../cards/create_new_card/newFlashCard_data";


class FlashCardsPage extends AppPage {

    open() {
        super.open('https://stage.pasv.us/flash');
    }
    // get menuCardsLink() {
    //     return $('//div[@id="site-menu"]//a[@qa="cards-link"]');
    // }

    get GroupName() {

        return browser.$(groupName);
    }

    get WaitingForApproval() {
        return browser.$('=Waiting for approval');
    }

    get CreateNewCardBtn() {
        return browser.$('//button[text() = "Create new Card"]');
    }

    get ModalForm() {
        return browser.$('//div[contains(@class, "sidepanel")]')
    }
}

export default new FlashCardsPage();