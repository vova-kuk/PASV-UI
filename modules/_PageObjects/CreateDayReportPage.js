import AppPage from "../AppPage";

class CreateDayReportPage extends AppPage {
    open() {
        super.open('https://stage.pasv.us/diary/create');
    }
    get header() {
        return browser.$('//h1');
    }
    get marks() {
        return browser.$('//div[contains(@class, "mb-2")]//strong');
    }
    get version() {
        return browser.$('//span[@qa="app-version"]');
    }
    get slogan() {
        return browser.$('//small[@qa="app-slogan"]');
    }
    get diaryLink() {
        return browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]');
    }
    get needHelp() {
        return browser.$('//input[@id="input-0"]');
    }
    get understoodEverything() {
        return browser.$('//input[@id="input-1"]');
    }
    get helpedClassmates() {
        return browser.$('//input[@id="input-2"]');
    }
    get watchedLectures() {
        return browser.$('//input[@id="input-3"]');
    }
    get readDocumentation() {
        return browser.$('//input[@id="input-4"]');
    }
    get codePractice() {
        return browser.$('//input[@id="input-5"]');
    }
    get quizPractice() {
        return browser.$('//input[@id="input-6"]');
    }
    get interviewPreparation() {
        return browser.$('//input[@id="input-7"]');
    }
    get recruiterPhoneCall() {
        return browser.$('//input[@id="input-8"]');
    }
    get interviewTechScreen() {
        return browser.$('//input[@id="input-9"]');
    }
    get interviewOnsite() {
        return browser.$('//input[@id="input-10"]');
    }
    get jobOffer() {
        return browser.$('//input[@id="input-11"]');
    }
    get moraleLevel() {
        return browser.$('//select[@name="morale"]');
    }
    get howManyHours() {
        return browser.$('//input[@name="hours"]');
    }
    get howWasYourDay() {
        return browser.$('//textarea[@name="description"]');
    }
    get saveButton() {
        return browser.$('//button[contains(text(),"Save")]')
    }
    get newDayReport() {
        return browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]');
    }
    createDayReport() {
        browser.$('//a[@qa="create-day-report-button"]').click();
        browser.pause(1000);
    }

    checkPageElements() {
        expect(this.header.getText()).to.contain('Create day report');
        expect(this.marks.getText()).to.contain('Marks to your daily report');
        expect(this.version.getText()).to.contain('0.1.126');
        expect(this.slogan.getText()).to.contain('© 2020 And what do you do for your career?');
        expect(this.saveButton.getText()).to.contain('Save');
    }
    fillOutReport() {
        this.needHelp.click();
        this.understoodEverything.click();
        this.helpedClassmates.click();
        this.watchedLectures.click();
        this.readDocumentation.click();
        this.moraleLevel.selectByVisibleText('9');
        this.howManyHours.setValue('9');
        this.howWasYourDay.setValue('Write what is useful for self-development, learning, or practice you did today.');
        this.saveButton.click();
        browser.pause(1000);
    }
    verifyNewReport() {
        expect(this.newDayReport.getText()).to.contain('Write what is useful for self-development, learning, or practice you did today.');
    }

}
export default new CreateDayReportPage();
