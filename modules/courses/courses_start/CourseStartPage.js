import AppPage from '../../AppPage';
import {courseCreate} from '../../courses/courses_start/courseStartData';


class CourseStartPage extends AppPage {

    createdCourseOpen () {
        return $(`//a[text()="${courseCreate.courseName}"]`).click();
    }

    get h1 () {
        return $('//h1');
    }

    get startCourseBtn () {
        return $('//button[@class="btn btn-primary"]');
    }

    startCourse () {
        this.startCourseBtn.click();
    }

    get successMessage () {
        return $('//*[@class="notifications-wrapper"]//*[@class="notification-title"]');
    }

}

export default new CourseStartPage();