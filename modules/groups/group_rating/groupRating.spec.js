import { expect } from 'chai';
import { student } from '../../user/_data/user.data';
import LoginPage from '../../user/_page/LoginPage';
import Menu from '../../_PageObjects/Menu';
import GroupsPage from '../_page/GroupsPage';
import GroupRating from '../../_PageObjects/GroupRating';

describe('GROUP RATING', () => {
  before('login as a student', () => {
    LoginPage.login(student);
  });

  it('should click menu "Groups" link', () => {
    Menu.groupLink.click();
    browser.waitUntil(() => {
      return GroupsPage.h1.getText() === 'Groups';
    }, 500);
  });

  it('should click "Group4Test" link', () => {
    GroupsPage.group4TestLink.scrollIntoView();
    GroupsPage.group4TestLink.click();
    browser.waitUntil(() => {
      return GroupRating.h1.getText() === 'Group Group4Test';
    }, 500);
  });

  it('should click Rating link', () => {
    GroupRating.ratingLink.click();
    GroupRating.ratingTable.waitForDisplayed(500);
  });

  it('should have `facebook` icon', () => {
    expect(GroupRating.facebookLink.getAttribute('href')).include('facebook');
    expect(GroupRating.facebookLink.getAttribute('target')).eq('_blank');
    browser.pause(500);
  });

  it('should have `LinkedIn` icon', () => {
    expect(GroupRating.LinkedInLink.getAttribute('href')).include('linkedin');
    expect(GroupRating.LinkedInLink.getAttribute('target')).eq('_blank');
    browser.pause(500);
  });

  it('should have `GitHub` icon', () => {
    expect(GroupRating.gitHubLink.getAttribute('href')).include('github');
    expect(GroupRating.gitHubLink.getAttribute('target')).eq('_blank');
    browser.pause(500);
  });

  it('should have `Codewars` icon', () => {
    expect(GroupRating.codewarsLink.getAttribute('href')).include('codewars');
    expect(GroupRating.codewarsLink.getAttribute('target')).eq('_blank');
    browser.pause(500);
  });

  it('should click `Name` columnheader and check order is ascending', () => {
    GroupRating.nameColumnHeader.click();
    expect(GroupRating.nameColumnHeader.getAttribute('class')).include('-sort-asc');
    browser.pause(500);
  });

  it('should click `Name` columnheader and check order is descending', () => {
    GroupRating.nameColumnHeader.click();
    expect(GroupRating.nameColumnHeader.getAttribute('class')).include('-sort-desc');
    browser.pause(500);
  });

  it('should click `D` columnheader and check order is ascending', () => {
    GroupRating.dColumnHeader.click();
    expect(GroupRating.dColumnHeader.getAttribute('class')).include('-sort-asc');
    browser.pause(500);
  });

  it('should click `D` columnheader and check order is descending', () => {
    GroupRating.dColumnHeader.click();
    expect(GroupRating.dColumnHeader.getAttribute('class')).include('-sort-desc');
    browser.pause(500);
  });

  it('should click `Honor` columnheader and check order is ascending', () => {
    GroupRating.honorColumnHeader.click();
    expect(GroupRating.honorColumnHeader.getAttribute('class')).include('-sort-asc');
    browser.pause(500);
  });

  it('should click `Honor` columnheader and check order is descending', () => {
    GroupRating.honorColumnHeader.click();
    expect(GroupRating.honorColumnHeader.getAttribute('class')).include('-sort-desc');
    browser.pause(500);
  });

  it('should click `Tasks` columnheader and check order is ascending', () => {
    GroupRating.tasksColumnHeader.click();
    expect(GroupRating.tasksColumnHeader.getAttribute('class')).include('-sort-asc');
    browser.pause(500);
  });

  it('should click `Tasks` columnheader and check order is descending', () => {
    GroupRating.tasksColumnHeader.click();
    expect(GroupRating.tasksColumnHeader.getAttribute('class')).include('-sort-desc');
    browser.pause(500);
  });

  it('should click `Trend` columnheader and check order is ascending', () => {
    GroupRating.trendColumnHeader.click();
    expect(GroupRating.trendColumnHeader.getAttribute('class')).include('-sort-asc');
    browser.pause(500);
  });

  it('should click `Tasks` columnheader and check order is descending', () => {
    GroupRating.trendColumnHeader.click();
    expect(GroupRating.trendColumnHeader.getAttribute('class')).include('-sort-desc');
    browser.pause(500);
  });

  it('should click `Pulse` columnheader and check order is ascending', () => {
    GroupRating.pulseColumnHeader.click();
    expect(GroupRating.pulseColumnHeader.getAttribute('class')).include('-sort-asc');
    browser.pause(500);
  });

  it('should click `Pulse` columnheader and check order is descending', () => {
    GroupRating.pulseColumnHeader.click();
    expect(GroupRating.pulseColumnHeader.getAttribute('class')).include('-sort-desc');
    browser.pause(500);
  });
});
