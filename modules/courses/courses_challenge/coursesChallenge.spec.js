import LoginPage from "../../_PageObjects/LoginPage";
import {admin} from "../../user/login/loginRole_data";
import Courses from "../Courses";
import Challenge from "./Challenge";
import {course} from "../Courses";
import {challenge} from "./Challenge";


describe('CREATE A NEW COURSE AND CHALLENGE', () => {

    it('should create COURSE', ()=> {
       Courses.createNewCourse;
    });

    it('should create Challenge', ()=> {
       Challenge.createNewChallenge;
    });

});