class Menu {

    get profileDropdown() {
        return $('//a[@class="dropdown-toggle nav-link"]');
    }

    get profileBtn() {
        return $('//button[contains(text(),"Profile")]');
    }

    get coursesLink(){
        return $('//div[@id="site-menu"]//a[@qa="courses-link"]');
    }

    get cardsLink() {
        return $('//div[@id="site-menu"]//a[@qa="cards-link"]');
    }

    get groupLink () {
        return $('//div[@id="site-menu"]//a[@qa="groups-link"]');
    }

    get siteName (){
        return $('//span[@id="site-name"]');
    }

    get navigationBar (){
        return $('//div[@id="site-menu"]');
    }

    get h1 () {
        return $('//h1');
    }

    get p () {
        return $('//p');
    }

    get mainBar (){
        return $('//div[@id="main-bar"]');
    }
}

export default new Menu();
