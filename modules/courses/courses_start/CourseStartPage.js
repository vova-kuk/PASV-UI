import AppPage from '../../AppPage';
import NewCourseCreate from '../../courses/courses_start/NewCourseCreate';

class CourseStartPage extends AppPage {

    // const CourseStartData = {
    //     courseName: 'PASV Project Course TEST',
    //
    // };

    get createdCourse () {
        return $('//a[text()="PASV Project Course TEST2"]');
        //a[contains(text(),'PASV Project Course TEST')]
    }

    createdCourseOpen () {
        this.createdCourse.click();
        browser.pause(5000);
    }

    get h1 () {
        return $('//h1');

    }

    get startCourseBtn () {
        return $('//button[@class="btn btn-primary"]');
        browser.pause(5000);
    }

    startCourse () {
        this.startCourseBtn.click();
    }

    get successMessage () {
        return $('//*[@class="notifications-wrapper"]//*[@class="notification-title"]');
    }

}

export default new CourseStartPage();