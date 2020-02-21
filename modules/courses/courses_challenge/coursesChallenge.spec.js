import LoginPage from '../../_PageObjects/LoginPage';
import {admin} from '../../user/login/loginRole_data';
import Courses from '../Courses';
import Challenge from '../../_PageObjects/ChallengePage';
import {course} from '../Courses';
import {challenge} from '../../_PageObjects/ChallengePage';


describe('CREATE A NEW COURSE AND CHALLENGE', () => {

    it('should create COURSE', ()=> {
       Courses.createNewCourse;
    });

    it('should create Challenge', ()=> {
       Challenge.createNewChallenge;
    });

});