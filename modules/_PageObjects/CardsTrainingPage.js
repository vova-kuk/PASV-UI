import AppPage from "../AppPage";
class CardsTrainingPage extends AppPage{

    get startTraining (){
        return $('//button[contains(text(),"Start training")]');
    }
    get iKnow(){
        return $('//button[contains(text(),"I know")]');
    }


    open(path) {
        super.open('')
    }


}
export default new CardsTrainingPage();