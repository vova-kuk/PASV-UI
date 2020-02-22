class Notification {

  get title () {
    return $('//h4[@class="notification-title"]');
  }

  get success (){
    return $('//div[@class="notification notification-success notification-visible"]');
  }

  get fail (){
    return $('//div[@class="notification notification-error notification-visible"]');
  }
}

export default new Notification();