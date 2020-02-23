import AppPage from "../AppPage";

class GroupRatingPage extends AppPage{

    get group4Test(){
       return $('//a[contains(text(),"Group4Test")]');
    }

    get h1(){
        return $('//h1');
    }

    get ratingLink(){
        return $('//a[contains(text(),"Rating")]');
    }

    get facebookLink(){
       return  $('//a[@qa="facebook"]');
    }

    get LinkedInLink(){
        return $('//a[@qa="linkedIn"]');
    }

    get gitHubLink(){
        return $('//a[@qa="github"]');
    }

    get codewarsLink(){
        return $('//a[@qa="codewars"]');
    }
}
export default new GroupRatingPage();