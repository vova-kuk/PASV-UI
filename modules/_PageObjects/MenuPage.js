class MenuPage {
    get notificationTitle () {
        return $('//h4[@class="notification-title"]');
    }

    get notificationSuccess (){
        return $('//div[@class="notification notification-success notification-visible"]');
    }

    get notificationFail (){
        return $('//div[@class="notification notification-error notification-visible"]');
    }

    get siteName (){
        return $('//span[@id="site-name"]');
    }

    get navigationBar (){
        return $('//div[@id="site-menu"]');
    }

    get header () {
        return $('//h1');
    }

    get paragraph () {
        return $('//p');
    }

    get mainBar (){
        return $('//div[@id="main-bar"]');
    }
}

export default new MenuPage();
