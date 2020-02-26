import { expect } from 'chai';
import LoginPage from '../../user/_page/LoginPage';
import DayReportLikePage from '../../_PageObjects/DayReportLikePage';
import CreateDayReportHelper from './CreateDayReportHelper';
import { student } from '../../user/_data/user.data';

describe('DAY_REPORT_LIKE_PAGE', () => {
  before(() => {
    LoginPage.login(student);
    DayReportLikePage.diaryLink.click();
    browser.pause(500);
  });

  it('should have a correct page title', () => {
    const actual = DayReportLikePage.h1.getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });

  it('should click Like button', () => {
    DayReportLikePage.createDayReportBtn.click();
    browser.pause(500);
    CreateDayReportHelper.createReport();
    browser.pause(500);
    expect(DayReportLikePage.submitBtn.getText()).equal('Like 👍');
    DayReportLikePage.submitBtn.click();
    browser.pause(500);
    expect(DayReportLikePage.submitBtn.getText()).equal('I like this 👍1');
  });

  it('should Like button be disabled', () => {
    expect(DayReportLikePage.submitBtn.isEnabled()).equal(false);
  });
});
