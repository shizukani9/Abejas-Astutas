const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const chai = require('chai');
const expect = chai.expect;
const { until } = require("selenium-webdriver");
const configuration = require("../../configuration.json")

When('I delete the feature type story from the backlog', async function() {
    const deleteStoryButton = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.deleteStoryButton), configuration.browser.timeout);
    await deleteStoryButton.click();
    const confirmDeleteButton = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.confirmDeleteButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(confirmDeleteButton), configuration.browser.timeout);
    await confirmDeleteButton.click();
});