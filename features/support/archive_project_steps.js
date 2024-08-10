const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
const chai = require('chai');
const expect = chai.expect;
const { By, until } = require("selenium-webdriver");

When('I navigate to the project settings page', async function() {
    // Navegar a la página de configuración del proyecto usando la ID del primer proyecto creada en el hook
    await DriverFactory.myDriver.get(`https://www.pivotaltracker.com/projects/${this.firstProjectId}/settings`);
});

Then('I archive the project', async function() {
    const archiveLink = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.archiveLink), 10000);

    // Desplazarse al elemento
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", archiveLink);
    
    // Esperar a que cualquier posible bloqueo desaparezca
    //const saveBar = By.css('div.save_bar'); // Ajusta este selector si es necesario
    //await DriverFactory.myDriver.wait(until.stalenessOf(DriverFactory.myDriver.findElement(saveBar)), 10000);

    // Intentar hacer clic nuevamente
    await archiveLink.click();
    
    const confirmArchiveButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.confirmArchiveButton), 10000);
    await confirmArchiveButton.click();
});


Then('I should see the project archived confirmation message', async function() {
    // Validar que se muestra el mensaje de confirmación de archivado
    const archivedWarning = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.archivedProjectsWarning), 10000);
    expect(await archivedWarning.isDisplayed()).to.be.true;
});
