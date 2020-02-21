import LoginPage from "../../_PageObjects/LoginPage";
import {admin} from "../../user/login/loginRole_data";
import CoursesPage from "../../_PageObjects/CoursesPage";
import ChallengePage from "../../_PageObjects/ChallengePage";
import {course} from "../../_PageObjects/CoursesPage";
import {challenge} from "../../_PageObjects/ChallengePage";


describe('CREATE A NEW COURSE AND NEW CHALLENGE', () => {

    it('should login as Admin', function () {
        LoginPage.loginRole(admin);
    });

    it('should create COURSE', ()=> {
        CoursesPage.createNewCourse;
    });

    it('should create Challenge', ()=> {
        ChallengePage.createNewChallenge;
    });

});

describe(' ADD CREATED CHALLENGE TO EXISTING COURSE ', () => {

    it('', () => {

    });


});