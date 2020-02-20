import AppPage from '../AppPage';

class CoursesProgressPage extends AppPage{

    get h1(){
        return $('//h1');
    }

    get coursesLink(){
        return $('//a[contains(text(),\"Courses\")]');
    }

    get progressLink(){
        return $('//ul[@class="list-group"]//div/a');
    }

    get completedLessonsBtn(){
        return $('//div[contains(text(),\"Completed Lessons\")]');
    }

    get profilePageLink(){
        return $('//div[@class=\'rt-tr -even\']//a[@class=\'mr-2\'][contains(text(),\'Test Testov\')]');
    }
}

export default new CoursesProgressPage();