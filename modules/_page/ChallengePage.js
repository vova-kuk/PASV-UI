import AppPage from './AppPage';
import { courseData } from './CoursesPage';
import Menu from "./Menu";

class ChallengePage extends AppPage {
  get createNewChallengeGlobal() {
    this.open('https://stage.pasv.us/challenge');
    this.createNewChallengeBtn.click();
    browser.waitUntil(() => $(Menu.h1).isDisplayed());
    this.challengeNameInput.setValue(challengeData.name);
    this.challengeDescriptionTextarea.setValue(challengeData.description);
    this.challengeInstructionTextarea.setValue(challengeData.instruction);
    this.challengeCompletedSolutionTextarea.setValue(challengeData.solution);
    this.challengeOpenTestTextarea.setValue(challengeData.openTest);
    this.challengeHiddenTestTextarea.setValue(challengeData.hiddenTest);
    this.challengeProgramingLanguageSelect.selectByAttribute('value', challengeData.language);
    this.challengeLevelSelect.selectByAttribute('value', challengeData.level);
    this.chalelngeCheckerSelect.selectByAttribute('value', challengeData.checker);
    this.challengeSaveBtn.click();
    browser.waitUntil(() => $(Menu.h1).isDisplayed());
  }

  get createNewChallengeBtn() {
    return $('//button[@qa="create-challenge-button"]');
  }

  get challengeNameInput() {
    return $('//input[@name="name"]');
  }

  get challengeDescriptionTextarea() {
    return $('//textarea[@name="description"]');
  }

  get challengeInstructionTextarea() {
    return $('//textarea[@name="instruction"]');
  }

  get challengeCompletedSolutionTextarea() {
    return $('//div[@qa="completedSolution"]//textarea');
  }

  get challengeOpenTestTextarea() {
    return $('//div[@qa="openTest"]//textarea');
  }

  get challengeHiddenTestTextarea() {
    return $('//div[@qa="hiddenTest"]//textarea');
  }

  get challengeProgramingLanguageSelect() {
    return $('//select[@name="programmingLang"]');
  }

  get challengeLevelSelect() {
    return $('//select[@name="level"]');
  }

  get chalelngeCheckerSelect() {
    return $('//select[@name="checker"]');
  }

  get challengeSaveBtn() {
    return $('//button[@type="submit"]');
  }

  // Challenge selectors Inside Courses Student
  get challengeInsideCourseName() {
    return $(`//strong[text() ="${courseData.name}"]`);
  }

  get challengeInsideCourseTextarea() {
    return $('//div[@qa="initialSolution"]//textarea');
  }

  get challengeInsideCourseValidateBtn() {
    return $('//button[text() ="Validate solution")]');
  }

  get challengePassArray() {
    // check if all tests passed
    return $('//div[@class="col-md-6"]//span[contains(., "Pass")]'); // return array
  } // selector "class="col-md-6" -- needs change

  get challengeSubmitSolutionBtn() {
    return $('//button[text() = "Submit solution")]');
  }

  get challengeCompleteMark() {
    return $('//div[@class="mb-4 h5-"]//span[text() ="Completed")]');
  } // @class="mb-4 h5-" -- not strong selector
}

const challengeRandom99 = Math.trunc(Math.random() * 100);

const challengeData = {
  name: `${challengeRandom99} Количество приседаний`,
  description:
    'Каждый день Вася утром делает ровно 50 приседаний, и это количество он никогда не изменяет.\n' +
    'Сколько приседаний сделает Вася за `days` дней?',
  instruction:
    'Создайте константу именем `sitUps` (количество приседаний в день) и присвойте ей значение 50.\n' +
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
  solution:
    'const sitUps = 50;\n' + 'const days = 15;\n' + 'const numberOfSitUps = sitUps * days;\n',
  testsQuantity: 9,
  openTest:
    "it('Переменная `sitUps` существует и имеет значение', () => {\n" +
    '  expect(sitUps).not.undefined;\n' +
    '});\n' +
    '\n' +
    "it('Переменная `sitUps` является числом', () => {\n" +
    "  expect(sitUps).a('number');\n" +
    '});',
  hiddenTest:
    "it('Значение переменной `sitUps` равно 50', () => {\n" +
    '  expect(sitUps).equal(50);\n' +
    '});\n' +
    '\n' +
    "it('Переменная `days` существует и имеет значение', () => {\n" +
    '  expect(days).not.undefined;\n' +
    '});\n' +
    '\n' +
    "it('Переменная `days` является числом', () => {\n" +
    "  expect(days).a('number');\n" +
    '});\n' +
    '\n' +
    "it('Значение переменной `days` находится в диапазоне от 1 до 365', () => {\n" +
    '  expect(days >= 1 && days <= 365).true;\n' +
    '});\n' +
    '\n' +
    "it('Переменная `numberOfSitUps` существует и имеет значение', () => {\n" +
    '  expect(numberOfSitUps).not.undefined;\n' +
    '});\n' +
    '\n' +
    "it('Переменная `numberOfSitUps` является числом', () => {\n" +
    "  expect(numberOfSitUps).a('number');\n" +
    '});\n' +
    '\n' +
    "it('Значение переменной `numberOfSitUps` вычислено верно', () => {\n" +
    '  expect(numberOfSitUps).equal(sitUps * days);\n' +
    '});\n',
  language: 'JavaScript',
  level: 'Easy',
  checker: 'unit',
};

export default new ChallengePage();
export { challengeData };
