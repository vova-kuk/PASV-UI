import AppPage from "../AppPage";

class CardsWaitingForApprovalPage extends AppPage{
    get PageNameTitle(){
        return browser.$('//span[contains(text(), "Waiting for approval")]');
    }

    get Refresh(){
        return browser.$('//button[contains(text(), "Refresh")]');
    }

    get CreateCard(){
        return browser.$('//button[contains(text(), "Create new Card")]');
    }

    get ModuleWindowTitle(){
        return browser.$('//div[@class="modal-body"]//h5[@class="modal-title"]')
    }

    get ModuleWindowQuestion(){
        return browser.$('//div[@class="modal-body"]//textarea[@name="question"]');
    }

    get ModuleWindowAnswer(){
        return browser.$('//div[@class="modal-body"]//textarea[@name="answer"]');
    }

    get ModuleWindowClose(){
        return browser.$('//button[@class="close"]')
    }

    get lastCreatedCardQuestion() {
        return browser.$('//div[@class = "pb-4 mb-4 border-bottom"]//strong[@class = "d-block mb-2"]');
    }

    get lastCreatedCardAnswer() {
        return browser.$('//div[@class = "pb-4 mb-4 border-bottom"]//span[2]');
    }

    get lastCreatedCardCreator() {
        return browser.$('//div[@class = "pb-4 mb-4 border-bottom"]//small[@class]')
    }

    get lastCreatedCardSticker(){
        return browser.$('//div[@class = "pb-4 mb-4 border-bottom"]//span[@class="badge badge-secondary"]')
    }
    // Я пытался найти где взять этот селектор, но не нашел. Решил временно свой написать.
    get userName() {
        return browser.$('//a[@class="dropdown-toggle nav-link"]')
    }
}

export default new CardsWaitingForApprovalPage();