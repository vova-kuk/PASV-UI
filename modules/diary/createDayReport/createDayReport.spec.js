import LoginPage from '../../user/_page/LoginPage';
import LogoutPage from '../../user/_page/LogoutPage';
import CreateDayReportPage from '../_page/CreateDayReportPage';
import { student } from '../../user/_data/user.data';

describe('CREATE DAY REPORT', () => {
  before('should login as STUDENT, navigate to Day Report page', () => {
    LoginPage.login(student);
    CreateDayReportPage.diaryLink.click();
    CreateDayReportPage.createDayReportBtn.click();
  });

  it('should verify Create Day Report PAGE HEADER', () => {
    expect(CreateDayReportPage.header.getText()).eq('Create day report');
  });

  it('should verify COMMON TITLE TO ALL CHECK MARKS', () => {
    expect(CreateDayReportPage.checkMarksTitle.getText()).eq('Marks to your daily report');
  });

  it('should select ALL CHECK MARKS to DAILY REPORT', () => {
    CreateDayReportPage.checkAllMarks();
  });

  it('should display & verify INSTRUCTION to NEED HELP check mark', () => {
    expect(CreateDayReportPage.instructionToNeedHelp1.getText()).eq(
      'Describe what difficulties you have, we will contact you and help',
    );
    CreateDayReportPage.instructionToNeedHelp2.isDisplayed();
  });

  it('should display & verify INSTRUCTION to UNDERSTOOD EVERYTHING check mark', () => {
    expect(CreateDayReportPage.instructionToUnderstoodEverything1.getText()).to.contain(
      'It means that you are not experiencing difficulties and understand',
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
    expect(CreateDayReportPage.slogan.getText()).to.contain('what do you do for your career?');
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
