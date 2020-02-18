import AppPage from './../../AppPage';

const newCourse = 'PASV Course TEST' + Math.random();

class NewCourseCreate extends AppPage {

    open() {
        super.open('https://stage.pasv.us/course');
    }

    get createBtn () {
        return $('//a[@class="btn btn-primary"]');
    }

    get title () {
        return $('//span[@class="h1 mr-4"]');
    }

    get setCourseName () {
        return $('//input[@name="name"]'); //why no set value in course name?
    }

    get setCourseDescription () {
        return $('//input[@name="description"]');
    }

    get setAccessType () {
        return $('//select[@name="accessType"]');
    }

    get CreateBtn () {
        return $('//button[@class="btn btn-primary"]');
    }


    createNewCourse () {
        this.open();
        this.createBtn.click();
        this.setCourseName.setValue(newCourse);
        this.setCourseDescription.setValue('Test Test Test Test Test');
        this.setAccessType.selectByVisibleText('All');
        this.CreateBtn.click();
        browser.pause(2000);
    }


}

export default new NewCourseCreate();

// get goToCoursesPage(){
//     return $('//div[@id="site-menu"]//a[@qa="courses-link"]');
// }