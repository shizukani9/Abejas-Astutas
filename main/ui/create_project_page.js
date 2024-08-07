const { By } = require("selenium-webdriver");

class CreateProjectPage{
    nameProjectInput = By.css('input.wizard__input[data-aid="wizard-input"]');
    createProjectButton = By.css('button.button--positive[data-aid="submit-button"]');
}

module.exports = new CreateProjectPage();