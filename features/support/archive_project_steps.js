const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
const chai = require('chai');
const expect = chai.expect;
const { By, until } = require("selenium-webdriver");

When('I navigate to the project settings page', async function() {
    await DriverFactory.myDriver.get(`https://www.pivotaltracker.com/projects/${this.firstProjectId}/settings`);
});

Then('I archive the project', async function() {
    const archiveLink = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.archiveLink), 10000);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", archiveLink);
    await archiveLink.click();
    const confirmArchiveButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.confirmArchiveButton), 10000);
    await confirmArchiveButton.click();
});

Then('I should see the project archived confirmation message', async function() {
    const archivedWarning = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.archivedProjectsWarning), 10000);
    expect(await archivedWarning.isDisplayed()).to.be.true;
});
