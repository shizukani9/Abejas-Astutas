const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const IntroductionPage = require("../../main/ui/introduction_page");
const RandomValues = require("../../features/support/random_values");
const { until, Key } = require("selenium-webdriver");
const configuration = require("../../configuration.json");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
let chai = require('chai');
let expect = chai.expect;

When('I delete a new project', async function(){
    console.log("Starting to delete the new first project");
    await DriverFactory.myDriver.get("https://www.pivotaltracker.com/projects/"+this.firstProjectId+"/settings");
    const deleteLink = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.deleteLink), configuration.browser.timeout);
    deleteLink.sendKeys(Key.SHIFT);
    await DriverFactory.myDriver.wait(until.elementIsVisible(deleteLink), configuration.browser.timeout);
    await deleteLink.click();
    const deleteButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.deleteButton));
    await deleteButton.click();
});

Then('I should see the Dashboard page without new project', async function(){
    console.log("I should see the Dashboard page without new project");
    await DriverFactory.myDriver.wait(until.urlIs("https://www.pivotaltracker.com/dashboard"), configuration.browser.timeout);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal("https://www.pivotaltracker.com/dashboard");
});