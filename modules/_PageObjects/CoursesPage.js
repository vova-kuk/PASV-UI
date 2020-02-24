import AppPage from '../AppPage';

class CoursesPage extends AppPage {

    get createNewCourseMethod() {
        this.open('https://stage.pasv.us/course');
        browser.pause(1000)
        this.createNewCourseBtn.click();
        browser.pause(1000);
        this.courseNameInput.setValue(courseData.name);
        this.courseDescriptionInput.setValue(courseData.description);
        this.accessTypeSelect.selectByAttribute('value', courseData.type);
        this.createBtn.click();
        browser.pause(1000);
    }

    get createNewCourseBtn() {
        return $('//a[contains(., "Create new Course")]')
    }

    get courseNameInput() {
        return $('//input[@name="name"]')
    }

    get courseDescriptionInput() {
        return $('//input[@name="description"]')
    }

    get accessTypeSelect() {
        return $('//select[@name="accessType"]')
    }

    get createBtn() {
        return $('//button[@type="submit"]')
    }

    get findCourse() {
        return $(`//ul[@class="list-group"]//a[text() ="${courseData.name}"]`)
    }

    get editBtn() {
        return $('//a[@class="edit"]');
    }

    get courseDescription() {
        return $(`//div[text() ="${courseData.description}"]`);
    }

    get startCourseBtn() {
        return $('//button[text() ="Start course"]');
    }




}

const courseRandom99 = Math.trunc(Math.random() * 100);

const
    courseData = {
        name: courseRandom99 + " Course for adding Challenge",
        description: 'description, description',
        type: 'all',
    };

export default new CoursesPage();

export {courseData};