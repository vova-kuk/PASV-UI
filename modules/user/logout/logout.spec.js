import LoginPage from '../../_PageObjects/LoginPage'
import { student } from '../login/loginRole_data'
import Logout from '../../_PageObjects/Logout'

describe('LOGOUT', () => {
  before(() => {
    LoginPage.loginRole(student);
  });

  it('should logout', () => {
    Logout.logout();
  });
});
