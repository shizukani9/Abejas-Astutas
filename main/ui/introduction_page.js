const { By } = require("selenium-webdriver");

class IntroductionPage{
    createProjectButton = By.css('.wizard .button');
    nameFirstProjectInput = By.css('.wizard input');
    //nameProjectInput = By.css('input.wizard__input[data-aid="wizard-input"]');
    //createProjectButton = By.css('button.button--positive[data-aid="submit-button"]');
}

module.exports = new IntroductionPage();