const { By } = require("selenium-webdriver");

class IntroductionPage {
    createProjectButton = By.css('.wizard .button');
    nameFirstProjectInput = By.css('.wizard input');

    // Nuevo método agregado para crear un nuevo proyecto
    async createNewProject(driver, projectName) {
        const projectNameInput = await driver.findElement(this.nameFirstProjectInput);
        await projectNameInput.sendKeys(projectName);

        const createProjectButton = await driver.findElement(this.createProjectButton);
        await createProjectButton.click();
    }
}

module.exports = new IntroductionPage();
