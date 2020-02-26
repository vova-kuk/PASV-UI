import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../../groups/_data/_page/CreateDayReportPage';
import { student } from '../../user/_data/user.data';

describe('CREATE DAY REPORT -- POSITIVE', () => {
  before('should login as STUDENT', () => {
    LoginPage.login(student);
  });

  it('should click DIARY navigation LINK', () => {
    CreateDayReportPage.diaryLink.click();
  });

  it('should click CREATE DAY REPORT BUTTON', () => {
    CreateDayReportPage.createDayReportBtn.click();
  });

  it('should verify Create Day Report PAGE HEADER', () => {
    expect(CreateDayReportPage.header.getText()).eq('Create day report');
  });

  it('should verify COMMON TITLE TO ALL CHECK MARKS', () => {
    expect(CreateDayReportPage.checkMarksTitle.getText()).eq('Marks to your daily report');
  });

  it('should select ALL CHECK MARKS to DAILY REPORT', () => {
    CreateDayReportPage.allMarksChecked();
  });

  it('should display & verify INSTRUCTION to NEED HELP check mark', () => {
    expect(CreateDayReportPage.instructionToNeedHelp1.getText()).eq(
      'Describe what difficulties you have, we will contact you and help',
    );
    CreateDayReportPage.instructionToNeedHelp2.isDisplayed();
  });

  it('should display & verify INSTRUCTION to UNDERSTOOD EVERYTHING check mark', () => {
    expect(CreateDayReportPage.instructionToUnderstoodEverything1.getText()).eq(
      'It means that you are not experiencing difficulties and understand the material that is discussed in the lessons.',
    );
    CreateDayReportPage.instructionToUnderstoodEverything2.isDisplayed();
  });

  it('should display & verify INSTRUCTION to HELPED CLASSMATES check mark', () => {
    expect(CreateDayReportPage.instructionToHelpedClassmates1.getText()).eq(
      'Specify to whom and on what topic you helped',
    );
    CreateDayReportPage.instructionToHelpedClassmates2.isDisplayed();
  });

  it('should select USER MORALE dropdown', () => {
    CreateDayReportPage.selectDropdown();
  });

  it('should fill out HOW MANY HOURS USER STUDIED TODAY input', () => {
    CreateDayReportPage.hoursStudiedInput();
  });

  it('should fill out HOW WAS YOUR DAY input', () => {
    CreateDayReportPage.howWasYourDayInput();
  });

  it('should verify FOOTER SLOGAN text', () => {
    expect(CreateDayReportPage.slogan.getText()).eq('© 2020 And what do you do for your career?');
  });

  it('should verify SAVE BUTTON TEXT', () => {
    expect(CreateDayReportPage.saveBtn.getText()).eq('Save');
  });

  it('should verify SAVE BUTTON is ACTIVE', () => {
    expect(CreateDayReportPage.saveBtn.isEnabled()).be.true;
  });

  it('should CLICK SAVE BUTTON ', () => {
    CreateDayReportPage.saveBtn.click();
  });

  it('should verify DAY REPORT WAS SUBMITTED', () => {
    expect(CreateDayReportPage.newDayReport.getText()).eq('qwertyuiopasdfghjklzxcvbnmqwer');
  });

  after('should LOGOUT', () => {
    LogoutPage.logout();
  });
});
