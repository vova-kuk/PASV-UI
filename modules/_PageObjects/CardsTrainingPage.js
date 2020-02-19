import AppPage from "../AppPage";
class CardsTrainingPage extends AppPage{

    get title () {
        return $ ('//h1');
    }

    get trainingLabel(){
        return browser.$('//ul[@qa="flash-group-tabs"]//a[contains(text(),"Training")]');
    }

    get startTraining () {
        return $('//button[contains(text(),"Start training")]');
    }
    get iKnow() {
        return $('//button[contains(text(),"I know")]');
    }

    get getRandom() {
        return $('//button[contains(text(),"Get random next")]');
    }

    get answer() {
        return $('//div[@class="result")]');
    }

    get progress() {
        return $('//div[@class="progress")]//div[@aria-valuenow="0"]');
    }

    open(path) {
        super.open('')
    }

    getRandomClick() {
        this.getRandom.click();
    }

    iKnowClick() {
        this.iKnow.click();
    }


}
export default new CardsTrainingPage();
