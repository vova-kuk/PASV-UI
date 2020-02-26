import {expect} from 'chai';
import HomePage from '../../groups/_data/_page/HomePage';

describe('HOMEPAGE', () => {
    it('should open the homepage', () => {
        HomePage.open();
    });
    it('should have correct Home page title', () => {
        expect(HomePage.title.getText()).eq('Progress Monitor');
    });
});
