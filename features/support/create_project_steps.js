const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const IntroductionPage = require("../../main/ui/introduction_page");
const RandomValues = require("../../features/support/random_values");
const { until } = require("selenium-webdriver");
const configuration = require("../../configuration.json");
let chai = require('chai');
let expect = chai.expect;

When('I create a new project with name: {string}', async function(projectName){
    console.log("Starting to create first project");
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
    const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
    this.firstProjectName = projectName;
    await projectNameInput.sendKeys(projectName);
    await createProjectButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
});

Then('I sould see the name of new project at the top left of the page', async function(){
    console.log("Verifying the project with name is created");
    const projectNameLabel = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.projectNameLabel), configuration.browser.timeout);
    const projectName = await projectNameLabel.getText();
    expect(projectName).to.equal(this.firstProjectName);
});