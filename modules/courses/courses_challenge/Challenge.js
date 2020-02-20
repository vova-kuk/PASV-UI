import AppPage from '../../AppPage';

class Challenge extends AppPage {
    get createNewChallengeBtn() {
        return browser.$('//button[@qa="create-challenge-button"]')
    };

    get challengeName() {
        return browser.$('//input[@name="name"]')
    }

    get chInstruction() {
        return browser.$('//textarea[@name="instruction"]')
    }

    get chCompletedSolution() {
        return browser.$('//div[@qa="completedSolution"]//textarea')
    }

    get chOpenTest() {
        return browser.$('//div[@qa="openTest"]//textarea')
    }

    get chHiddenTest() {
        return browser.$('//div[@qa="hiddenTest"]//textarea')
    }

    get chProgramingLanguage() {
        return browser.$('//select[@name="programmingLang"]')
    }

    get chLevel() {
        return browser.$('//select[@name="level"]')
    }

    get chChecker() {
        return browser.$('//select[@name="checker"]')
    }

    get saveBtn() {
        return browser.$('//button[@type="submit"]')
    }

    get createNewChallenge() {
        this.open('https://stage.pasv.us/challenge');
        this.createNewChallengeBtn.click();
        browser.pause(1000);
        this.challengeName.setValue(challenge.name);
        this.chInstruction.setValue(challenge.instruction);
        this.chCompletedSolution.setValue(challenge.solution);
        this.chOpenTest.setValue(challenge.openTest);
        this.chHiddenTest.setValue(challenge.hiddenTest);
        this.chProgramingLanguage.selectByAttribute('value', 'JavaScript');
        this.chLevel.selectByAttribute('value', 'Hard');
        this.chChecker.selectByAttribute('value', 'unit');
        this.saveBtn.click();
        browser.pause(1000);
    }
}
    const random99 = Math.trunc(Math.random()*100);

    const challenge = {
        name: `${random99} Challenge for adding`,
        instruction: 'Instruction',
        solution: 'Completed solution',
        openTest: 'Open Test',
        hiddenTest: 'Hidden Test',
    };


export default new Challenge();
export {challenge};