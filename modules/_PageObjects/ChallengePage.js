import AppPage from '../AppPage';

class ChallengePage extends AppPage {

    get createNewChallenge() {
        this.open('https://stage.pasv.us/challenge');
        this.createNewChallengeBtn.click();
        browser.pause(500);
        this.challengeName.setValue(challenge.name);
        this.challengeDescription.setValue(challenge.description);
        this.chInstruction.setValue(challenge.instruction);
        this.chCompletedSolution.setValue(challenge.solution);
        this.chOpenTest.setValue(challenge.openTest);
        this.chHiddenTest.setValue(challenge.hiddenTest);
        this.chProgramingLanguage.selectByAttribute('value', challenge.language );
        this.chLevel.selectByAttribute('value', challenge.level);
        this.chChecker.selectByAttribute('value', challenge.checker );
        this.saveBtn.click();
        browser.pause(1000);
    }

    get createNewChallengeBtn() {
        return browser.$('//button[@qa="create-challenge-button"]')
    };

    get challengeName() {
        return browser.$('//input[@name="name"]')
    }

    get challengeDescription() {
        return browser.$('//textarea[@name="description"]')
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

}

const random99 = Math.trunc(Math.random()*100);

const challenge = {
    name: `${random99} Количество приседаний`,
    description: 'Каждый день Вася утром делает ровно 50 приседаний, и это количество он никогда не изменяет.\n' +
        'Сколько приседаний сделает Вася за `days` дней?',
    instruction: 'Создайте константу именем `sitUps` (количество приседаний в день) и присвойте ей значение 50.\n' +
        'Создайте переменную с именем `days` (количество дней) и присвойте ей произвольное число от 1 до 365.\n' +
        'Создайте переменную `numberOfSitUps` (общее количество приседаний) и присвойте ей значение произведения\n' +
        'переменных `sitUps` и `days`.\n' +
        '\n' +
        'Приведем пример, который принципиально похож на то что нужно сделать,\n' +
        'но адаптируйте его к требованиям задачи:\n' +
        '```\n' +
        'const pencil = 10;\n' +
        'const boxes = 140;\n' +
        'const amount = pencil * boxes;\n' +
        '```',
    solution: 'const sitUps = 50;\n' +
        'const days = 15;\n' +
        'const numberOfSitUps = sitUps * days;\n',
    openTest: 'it(\'Переменная `sitUps` существует и имеет значение\', () => {\n' +
        '  expect(sitUps).not.undefined;\n' +
        '});\n' +
        '\n' +
        'it(\'Переменная `sitUps` является числом\', () => {\n' +
        '  expect(sitUps).a(\'number\');\n' +
        '});',
    hiddenTest: 'it(\'Значение переменной `sitUps` равно 50\', () => {\n' +
        '  expect(sitUps).equal(50);\n' +
        '});\n' +
        '\n' +
        'it(\'Переменная `days` существует и имеет значение\', () => {\n' +
        '  expect(days).not.undefined;\n' +
        '});\n' +
        '\n' +
        'it(\'Переменная `days` является числом\', () => {\n' +
        '  expect(days).a(\'number\');\n' +
        '});\n' +
        '\n' +
        'it(\'Значение переменной `days` находится в диапазоне от 1 до 365\', () => {\n' +
        '  expect(days >= 1 && days <= 365).true;\n' +
        '});\n' +
        '\n' +
        'it(\'Переменная `numberOfSitUps` существует и имеет значение\', () => {\n' +
        '  expect(numberOfSitUps).not.undefined;\n' +
        '});\n' +
        '\n' +
        'it(\'Переменная `numberOfSitUps` является числом\', () => {\n' +
        '  expect(numberOfSitUps).a(\'number\');\n' +
        '});\n' +
        '\n' +
        'it(\'Значение переменной `numberOfSitUps` вычислено верно\', () => {\n' +
        '  expect(numberOfSitUps).equal(sitUps * days);\n' +
        '});\n',
    language: 'JavaScript',
    level: 'Easy',
    checker: 'unit',

};

export default new ChallengePage();
export {challenge};
