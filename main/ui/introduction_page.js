const { By } = require("selenium-webdriver");

class IntroductionPage{
    createProjectButton = By.css('.wizard .button');
    nameFirstProjectInput = By.css('.wizard input');
}

module.exports = new IntroductionPage();