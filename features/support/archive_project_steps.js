const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
const chai = require('chai');
const expect = chai.expect;
const { By, until, Key } = require("selenium-webdriver");
const configuration =require("../../configuration.json");

When('I navigate to the project settings page', async function() {
    await DriverFactory.myDriver.get(`https://www.pivotaltracker.com/projects/${this.firstProjectId}/settings`);
});

Then('I archive the project', async function() {
    const archiveLink = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.archiveLink), configuration.browser.timeout);
    archiveLink.sendKeys(Key.SHIFT);
    await DriverFactory.myDriver.wait(until.elementIsVisible(archiveLink), configuration.browser.timeout);
    await archiveLink.click();
    const confirmArchiveButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.confirmArchiveButton), configuration.browser.timeout);
    await confirmArchiveButton.click();
});

Then('I should see the project archived confirmation message', async function() {
    const archivedWarning = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.archivedProjectsWarning), configuration.browser.timeout);
    expect(await archivedWarning.isDisplayed()).to.be.true;
});
