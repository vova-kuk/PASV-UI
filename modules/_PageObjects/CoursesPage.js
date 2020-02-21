import AppPage from '../AppPage';

class CoursesPage extends AppPage {

    get createNewCourseMethod() {
        this.open('https://stage.pasv.us/course');
        this.createNewCourseBtn.click();
        browser.pause(1000);
        this.courseNameInput.setValue(courseData.name);
        this.courseDescriptionInput.setValue(courseData.description);
        this.accessTypeSelect.selectByAttribute('value', courseData.type);
        this.createBtn.click();
        browser.pause(1000);
    }

    get createNewCourseBtn() {
        return $('//a[contains(text(), "Create new Course")]')
    }

    get courseNameInput(){
        return $('//input[@name="name"]')
    }

    get courseDescriptionInput(){
        return $('//input[@name="description"]')
    }

    get accessTypeSelect(){
        return $('//select[@name="accessType"]')
    }

    get createBtn(){
        return $('//button[@type="submit"]')
    }

    get listOfCoursesList() {
        return browser.$('//ul[@class="list-group"]//h4//a[]')
        //ul[@class="list-group"]//div[all]h4/a'
// return browser.$(//div[@qa="group-list"]//h4[@qa="group-name"]//a[contains(text(), "...")] )
    }

}

const courseRandom99 = Math.trunc(Math.random()*100);

const courseData = {
    name: courseRandom99 + " Course for adding Challenge",
    description: 'description',
    type: 'all',
};

export default new CoursesPage();
export {courseData};