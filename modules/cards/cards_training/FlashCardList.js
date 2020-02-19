import AppPage from "../../AppPage";

class FlashCardList extends AppPage {

    get h1(){
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


}

export default new FlashCardList();