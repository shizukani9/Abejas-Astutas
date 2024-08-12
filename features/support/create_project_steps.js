const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const IntroductionPage = require("../../main/ui/introduction_page");
const DashboardPage = require("../../main/ui/dashboard_page");
const RandomValues = require("../../features/support/random_values");
const { until } = require("selenium-webdriver");
const configuration = require("../../configuration.json");
let chai = require('chai');
let expect = chai.expect;

When('I create a new project with name: {string}', async function(projectName){
    console.log("I create a new project with name: {string}");
    await DriverFactory.myDriver.get("https://www.pivotaltracker.com/dashboard");
    const createProjectFromDashButton = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.createProjectButton));
    await createProjectFromDashButton.click();
    const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.projectNameInput));
    const selectorAccountDropdown = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.selectorAccountDropdown));
    this.firstProjectName = RandomValues.getRandomValues(projectName);
    await projectNameInput.sendKeys(this.firstProjectName);
    await selectorAccountDropdown.click();
    const optionOfDropdownSelector = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.optionOfDropdownSelector));
    await optionOfDropdownSelector.click();
    const createButton = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.createButton));
        
    await createButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
});

Then('I sould see the name of new project at the top left of the page', async function(){
    console.log("I sould see the name of new project at the top left of the page");
    const projectNameLabel = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.projectNameLabel), configuration.browser.timeout);
    const projectName = await projectNameLabel.getText();
    expect(projectName).to.equal(this.firstProjectName);
});