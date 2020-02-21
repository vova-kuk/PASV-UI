import AppPage from "../AppPage";

class GroupsQuizPage extends AppPage {
     open() {
        super.open( 'https://stage.pasv.us/groups');
    }
    get h1(){
         return browser.$('//h1');
    }
    get openExistedGroupsLink (){
         return browser.$('//a[contains(text(),"Kolobok for test")]');
    }
    get existingGroupTitle (){
         return browser.$('//h1[@qa="group-title"]');
    }
    get QuizeLink (){
         return browser.$('//a[contains(text(),"Quiz")]');
    }
}