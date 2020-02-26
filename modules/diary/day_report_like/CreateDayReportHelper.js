import AppPage from '../../groups/_data/_page/AppPage';

class CreateDayReportHelper extends AppPage {
  open() {
    super.open('https://stage.pasv.us/diary/create');
  }

  get header() {
    return browser.$('//h1');
  }

  get saveBtn() {
    return browser.$('//button[contains(text(),"Save")]');
  }

  get newDayReport() {
    return browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]');
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

  get moraleLevel() {
    return browser.$('//select[@name="morale"]');
  }

  get howManyHours() {
    return browser.$('//input[@name="hours"]');
  }

  get howWasYourDay() {
    return browser.$('//textarea[@name="description"]');
  }

  get marksRequired() {
    return browser.$('//form/div[1]/div[1]//span[@innertext="Required"]');
  }

  get moraleRequired() {
    return browser.$(
      '//div[@class="d-flex flex-row"]/span[@innertext="Required"]',
    );
  }

  createDayReport() {
    browser.$('//a[@qa="create-day-report-button"]').click();
  }

  createReport() {
    this.understoodEverything.click();
    this.helpedClassmates.click();
    this.watchedLectures.click();
    this.readDocumentation.click();
    this.codePractice.click();
    this.quizPractice.click();
    this.interviewPreparation.click();
    this.moraleLevel.selectByVisibleText('9');
    this.howManyHours.setValue('9');
    this.howWasYourDay.setValue(
      'Today you are definitely closer to your dreamjob then you were yesterday.',
    );
    this.saveBtn.click();
  }
}

export default new CreateDayReportHelper();
