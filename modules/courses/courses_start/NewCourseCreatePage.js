import AppPage from './../../AppPage';
import {courseCreate} from '../../_data/courseStart.data';


class newCourseCreatePage extends AppPage {

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
        return $('//input[@name="name"]');
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


    courseCreate () {
        this.open();
        this.createBtn.click();
        this.setCourseName.setValue(courseCreate.courseName);
        this.setCourseDescription.setValue(courseCreate.description);
        this.setAccessType.selectByVisibleText(courseCreate.accessType);
        this.CreateBtn.click();
        browser.pause(500);
    }

    get createdCourseTitle () {
        return $(`//a[text()="${courseCreate.courseName}"]`);
    }

}

export default new newCourseCreatePage();



