import AppPage from '../../_page/AppPage';

class CreateDayReportPage extends AppPage {
  get diaryLink() {
    return browser.$('//a[@qa="diary-link"]');
  }

  get createDayReportBtn() {
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  get header() {
    return browser.$('//h1');
  }

  get checkMarksTitle() {
    return browser.$('//div[contains(@class, "mb-2")]//strong');
  }

  get needHelp() {
    return browser.$('//input[@id="input-0"]') && browser.$('//input[@label="I need help"]');
  }

  get understoodEverything() {
    return (
      browser.$('//input[@id="input-1"]') && browser.$('//input[@label="I understood everything"]')
    );
  }

  get helpedClassmates() {
    return browser.$('//input[@id="input-2"]') && browser.$('//input[@label="Helped classmates"]');
  }

  get watchedLectures() {
    return browser.$('//input[@id="input-3"]') && browser.$('//input[@label="Watched lectures"]');
  }

  get readDocumentation() {
    return browser.$('//input[@id="input-4"]') && browser.$('//input[@label="Read documentation"]');
  }

  get codePractice() {
    return browser.$('//input[@id="input-5"]') && browser.$('//input[@label="Code practice"]');
  }

  get quizPractice() {
    return browser.$('//input[@id="input-6"]') && browser.$('//input[@label="Quiz practice"]');
  }

  get interviewPreparation() {
    return (
      browser.$('//input[@id="input-7"]') && browser.$('//input[@label="Interview preparation"]')
    );
  }

  get recruiterPhoneCall() {
    return (
      browser.$('//input[@id="input-8"]') && browser.$('//input[@label="Recruiter phone call"]')
    );
  }

  get interviewTechScreen() {
    return (
      browser.$('//input[@id="input-9"]') &&
      browser.$('//input[@label="Interview technical screen"]')
    );
  }

  get interviewOnsite() {
    return browser.$('//input[@id="input-10"]') && browser.$('//input[@label="Interview onsite"]');
  }

  get jobOffer() {
    return browser.$('//input[@id="input-11"]') && browser.$('//input[@label="Got a job offer"]');
  }

  get instructionToNeedHelp1() {
    return browser.$('//label[@for="input-0"]//small[@class="text-secondary"]');
  }

  get instructionToNeedHelp2() {
    return browser.$(
      '//div[@innertext="Describe what difficulties you have, we will contact you and help"]',
    );
  }

  get instructionToUnderstoodEverything1() {
    return browser.$('//label[@for="input-1"]//small[@class="text-secondary"]');
  }

  get instructionToUnderstoodEverything2() {
    return browser.$(
      '//div[@innertext="It means that you are not experiencing difficulties and understand the material that is discussed in the lessons."]',
    );
  }

  get instructionToHelpedClassmates1() {
    return browser.$('//label[@for="input-2"]//small[@class="text-secondary"]');
  }

  get instructionToHelpedClassmates2() {
    return browser.$('//div[@innertext="Specify to whom and on what topic you helped"]');
  }

  get slogan() {
    return browser.$('//small[@qa="app-slogan"]');
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

  get saveBtn() {
    return browser.$('//button[contains(text(),"Save")]');
  }

  get newDayReport() {
    return browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]');
  }

  get requiredWarningForCheckMarks() {
    return browser.$('//div[@qa="day-report-marks"]//span[@innertext="Required"]');
  }

  get requiredWarningForMorale() {
    return browser.$('//div[@class="d-flex flex-row"]//span[@innertext="Required"]');
  }

  get maxTenWarning() {
    return browser.$('//div[@innertext="Maximum is 10"]');
  }

  get mustBeThirtyWarning() {
    return browser.$('//div[@innertext="Must be 30 characters or more"]');
  }

  checkAllMarks() {
    for (let i = 0; i < 12; i++) {
      browser.$(`//input[@id="input-${i}"]`).click();
    }
  }

  selectDropdown() {
    this.moraleLevel.selectByVisibleText('10 – I am pleased with everything!');
    for (let i = 9; i > 0; i--) {
      this.moraleLevel.selectByVisibleText(`${i}`);
    }
    this.moraleLevel.selectByVisibleText('0 – I give up');
  }

  hoursStudiedInput() {
    this.howManyHours.setValue('1'); //one digit number from 0 to 9
    this.howManyHours.setValue('9'); //one digit number from 0 to 9
    this.howManyHours.setValue('10'); //two-digit number below 11
  }

  hoursStudiedInputNeg() {
    this.howManyHours.setValue('восемь'); //input not as a number, but as a text
    this.howManyHours.setValue('11'); //number greater than 10
    this.howManyHours.setValue('111'); //three-digit number
  }

  howWasYourDayInput() {
    this.howWasYourDay.setValue('QWERTYUIOPASDFGHJKLZXCVBNMQWERT'); //31-character Capital letters
    this.howWasYourDay.setValue('&-+=87900-=%$#@!&*((((((((((()'); //symbols and numbers
    this.howWasYourDay.setValue(
      'Khaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjkhjkfhfjkdhjkahdkjahjkf' +
        'hajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;huohrfdjkkkkkkkkkkkkk' +
        'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kjKhaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjkhjkfhfjkdhj' +
        'kahdkjahjkfhajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;huohrfdjkk' +
        'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKhaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjkhjk' +
        'fhfjkdhjkahdkjahjkfhajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;huo' +
        'hrfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKhaskjfhajkdhajdhsajhjahjahjkhjkahfjkahkjahsjk' +
        'hjkfhfjkdhjkahdkjahjkfhajfhadjkhfjhafjhakjfhadjhfjkahdfjkhjksncknsjvajnhfjahshaldhlafhlakhdlfaafl;' +
        'huohrfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    ); //800-character text
    this.howWasYourDay.setValue('орплорпвылыплпфрвпфровпофпрфпрфпыр'); //Russian alphabet
    this.howWasYourDay.setValue('qwertyuiopasdfghjklzxcvbnmqwer'); //30-character text entered
  }

  howWasYourDayNegative() {
    this.howWasYourDay.setValue('qwertyuiopasdfghjklzxcvbnmqwe'); //29-character text entered
  }

  createNewDayReport() {
    this.createDayReportBtn.click();
    this.checkAllMarks();
    this.moraleLevel.selectByVisibleText('9');
    this.howManyHours.setValue('5');
    this.howWasYourDayInput();
    this.saveBtn.click();
  }
}

export default new CreateDayReportPage();
