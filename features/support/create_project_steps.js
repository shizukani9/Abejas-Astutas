const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const IntroductionPage = require("../../main/ui/introduction_page");
const RandomValues = require("../../features/support/random_values");
const { until } = require("selenium-webdriver");
const configuration = require("../../configuration.json");
let chai = require('chai');
let expect = chai.expect;

When('I navigate to the Introduction page', async function(){
    expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://www.pivotaltracker.com/introduction');
});

Then('I create a new project with the random name', async function(){
    console.log("Starting to create first project");
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
    const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
    this.firstProjectName = RandomValues.alphanumeric(6);
    await projectNameInput.sendKeys(this.firstProjectName);
    await createProjectButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
});

Then('I should see the stories tab project', async function(){
    const logoImage = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.logoImage), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(logoImage), configuration.browser.timeout);
    const isVisible = await logoImage.isDisplayed();
    expect(isVisible).to.be.true;
});

Then('I create a new project with the static name', async function(dataTable){
    console.log("Starting to create first project");
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
    const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
    await projectNameInput.sendKeys(dataTable.rowsHash().NameFirstProject);
    await createProjectButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
});