import AppPage from '../AppPage';

class CoursesProgressPage extends AppPage{

    get h1(){
        return $('//h1');
    }

    get coursesLink(){
        return $('//a[contains(text(),\"Courses\")]');
    }

    get progressLink(){
        return $('//body[@class=\'js-focus-visible\']/div[@id=\'root\']/div/div/div[@class=\'container\']/div[@class=\'row\']/div[@class=\'col\']/div/div/ul[1]/div[1]/a[1]');
    }
}

export default new CoursesProgressPage();