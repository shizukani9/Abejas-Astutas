const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
const chai = require('chai');
const expect = chai.expect;
const { By, until, Key } = require("selenium-webdriver");
const configuration =require("../../configuration.json");
const RandomValues = require("../../features/support/random_values");
const StoriesTab = require("../../main/ui/stories_tab");

When('I change the Project Title to: {string}', async function(title) {
    console.log("I change the Project Title to: {string}");
    const projectTitleInput = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.projectTitleInput));
    this.newFirstProjectTitle = RandomValues.getRandomValues(title);;
    await projectTitleInput.clear();
    await projectTitleInput.sendKeys(this.newFirstProjectTitle);
});

When('I change the Project Description to: {string}', async function(description) {
    console.log("I change the Project Description");
    const projectDescriptionInput = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.projectDescriptionInput));
    this.changeProjectDescription = RandomValues.getRandomValues(description);
    await projectDescriptionInput.sendKeys(this.changeProjectDescription);
});

When('I uncheck the enable tasks checkbox', async function() {
    console.log("I uncheck the enable tasks checkbox");
    const enableTasksCheckbox = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.enableTasksCheckbox));
    await enableTasksCheckbox.click();
});

When('I save the changes', async function() {
    console.log("I save the changes");
    const saveButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.saveButton));
    await saveButton.click();
    await DriverFactory.myDriver.switchTo().alert().accept();
    await DriverFactory.myDriver.switchTo().defaultContent();
});

Then('I should see the changes saved correctly', async function() {
    console.log("I should see the changes saved correctly");
    const projectNameLabel = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.projectNameLabel), configuration.browser.timeout);
    const projectName = await projectNameLabel.getText();
    expect(projectName).to.equal(this.newFirstProjectTitle);
});