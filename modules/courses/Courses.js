import AppPage from "../AppPage";

class Courses extends AppPage {
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

}

export default new Courses();