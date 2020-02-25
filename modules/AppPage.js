export default class AppPage {
    open(path){
        browser.url(path);
    };

    click(element){
        $(element).click()
    };

}
