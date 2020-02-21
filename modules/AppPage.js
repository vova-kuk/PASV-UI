export default class AppPage {
    async open(path) {
        await browser.url(path);
    }

    click(element){
        $(element).click()
    }

}
