import AppPage from '../AppPage';

class CreateLecturePage extends AppPage {

    get h3() {
        return browser.$('//div//h3[@qa="lecture-create-edit-title"]');
    }

    get lectureNameField() {
        return browser.$('//input[@name="name"]');
    }

    get dateField() {
        return browser.$('//input[@placeholder="Date"]');
    }

    get saveBtn() {
        return browser.$('//button[@type="submit"]');
    }
}

export default new CreateLecturePage();