class MenuPage {
    get notificationTitle () {
        return $('//h4[@class="notification-title"]');
    }

    get notificationSuccess (){
        return $('//div[@class='notification notification-success notification-visible']');
    }

    get notificationFail (){
        return $('//div[@class='notification notification-error notification-visible']');
    }

    get header () {
        return $('//h1');
    }

    get footer (){
        return $('');

    }

    get mainBar (){
        return $('//div[@id='main-bar']');
    }
}

export default new MenuPage();
