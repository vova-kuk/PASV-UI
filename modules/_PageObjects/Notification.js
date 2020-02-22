class Notification {
  get notificationTitle () {
    return $('//h4[@class="notification-title"]');
  }

  get notificationSuccess (){
    return $('//div[@class="notification notification-success notification-visible"]');
  }

  get notificationFail (){
    return $('//div[@class="notification notification-error notification-visible"]');
  }
}

export default new Notification();