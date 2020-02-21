import AppPage from '../AppPage';
import LoginPage from "../_PageObjects/LoginPage";
import {admin} from "../user/login/loginRole_data";

class CoursesPage extends AppPage {

    get createNewCourse() {
        this.open('https://stage.pasv.us/course');
        this.createNewCourseBtn.click();
        browser.pause(1000);
        this.courseName.setValue(course.name);
        this.courseDescription.setValue(course.description);
        this.accessType.selectByAttribute('value', 'all');
        this.createBtn.click();
        browser.pause(1000);
    }

    get createNewCourseBtn() {
        return browser.$('//a[contains(text(), "Create new Course")]')
    }

    get courseName(){
        return browser.$('//input[@name="name"]')
    }

    get courseDescription(){
        return browser.$('//input[@name="description"]')
    }

    get accessType(){
        return browser.$('//select[@name="accessType"]')
    }

    get createBtn(){
        return browser.$('//button[@type="submit"]')
    }

    get listOfCourses() {
        return browser.$('//ul[@class="list-group"]//h4//a[]')
        //ul[@class="list-group"]//div[all]h4/a'
// return browser.$(//div[@qa="group-list"]//h4[@qa="group-name"]//a[contains(text(), "...")] )
    }

}

const random99 = Math.trunc(Math.random()*100);

const course = {
    name: `${random99} Course for adding Challenge`,
    description: 'description',
};

export default new CoursesPage();
export {course};