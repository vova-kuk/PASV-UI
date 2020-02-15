import { expect } from 'chai';
import ProfilePage from './ProfilePage';

describe('PROFILEPAGE', () => {
    it('should open the profilepage', () => {
        ProfilePage.open();
        browser.pause(5000)
    });
});
