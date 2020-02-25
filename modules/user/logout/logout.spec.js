import LoginPage from '../../_PageObjects/LoginPage'
import { student } from '../../_data/user.data'
import Logout from '../../_PageObjects/LogoutPage'

describe('LOGOUT', () => {
  before(() => {
    LoginPage.login(student);
  });

  it('should logout', () => {
    Logout.logout();
  });
});
