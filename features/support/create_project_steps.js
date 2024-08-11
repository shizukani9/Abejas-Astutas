const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const IntroductionPage = require("../../main/ui/introduction_page");
const RandomValues = require("../../features/support/random_values");
const { until } = require("selenium-webdriver");
const configuration = require("../../configuration.json");
let chai = require('chai');
let expect = chai.expect;

When('I create a new project with the random name', async function(){
    console.log("Starting to create first project");
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
    const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
    this.firstProjectName = RandomValues.alphanumeric(6);
    await projectNameInput.sendKeys(this.firstProjectName);
    await createProjectButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
});

Then('I should see the project created with the random name', async function(){
    console.log("Verifying the project with random name is created");
    const projectNameLabel = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.projectNameLabel), configuration.browser.timeout);
    const projectName = await projectNameLabel.getText();
    expect(projectName).to.equal(this.firstProjectName);
});

When('I create a new project with the static name', async function(dataTable){
    console.log("Starting to create first project");
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
    const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
    await projectNameInput.sendKeys(dataTable.rowsHash().NameFirstProject);
    await createProjectButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
});

Then('I should see the project created with the static name', async function(dataTable){
    console.log("Verifying the project with static name is created");
    const projectNameExpected = dataTable.rowsHash().NameFirstProject;
    const projectNameLabel = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.projectNameLabel), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(projectNameLabel), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(projectNameLabel), configuration.browser.timeout);
    const projectName = await projectNameLabel.getText();
    expect(projectName).to.equal(projectNameExpected);
});