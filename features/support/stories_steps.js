const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const StoryPanel = require("../../main/ui/story_panel");
const configuration = require("../../configuration.json");
const environment = require("../../environment.json");
const RandomValues = require("../../features/support/random_values");
const { until, Key } = require("selenium-webdriver");
let chai = require('chai');
let expect = chai.expect;
let projectName

When('I create a new story in backlog panel with following information:', async function(dataTable){
    console.log('I create a new story in backlog panel with following information:');
    const addStoryButton = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.addStoryButton));
    await DriverFactory.myDriver.wait(until.elementIsVisible(addStoryButton), configuration.browser.timeout);
    await addStoryButton.click();

    const storyTitleTextField = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.storyTitleTextField));
    const storyTypeDropdown = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.storyTypeDropdown));
    const ownerPlusIcon = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.ownerPlusIcon));
    this.projectName = RandomValues.getRandomValues(dataTable.rowsHash().Title);
    await storyTitleTextField.sendKeys(this.projectName);
    await storyTypeDropdown.click();
    StoryPanel.locatorAux.value = StoryPanel.storyOptionInDropdown.value.replace("{0}", dataTable.rowsHash().StoryType.toLowerCase())
    const optionSelectedInDropdown = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.locatorAux));
    await optionSelectedInDropdown.click();
    if (dataTable.rowsHash().Owners !== undefined){
        await ownerPlusIcon.click();
        const ownerList = await DriverFactory.myDriver.wait(until.elementsLocated(StoryPanel.ownerSelect));
        for (let i = 0; i < ownerList.length; i++) {
            const element = ownerList.pop();
            if ((await element.getText()).toString() === environment.prod.userMember01.name)
                await element.click();
        }
    }
    
    const saveButton = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.saveButton));
    await saveButton.sendKeys(Key.SHIFT);
    await saveButton.click();
    await DriverFactory.myDriver.wait(until.elementIsVisible(addStoryButton), configuration.browser.timeout);
});

Then('I should see the story with name: {string} in backlog panel', async function(storyName){
    console.log('I should see the story with name: {string} in backlog panel');
    let storyItem = await DriverFactory.myDriver.findElement(StoriesTab.previewStoryItemRow);
    storyItem = await DriverFactory.myDriver.wait(until.elementTextContains(storyItem, this.projectName));
    expect(storyItem).to.not.equal(undefined);
});

Then('I should see the story in backlog panel with following information:', async function(dataTable){
    console.log('I should see the story in backlog panel with following information:');
    let storyItem = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.previewStoryItemRow));
    storyItem = await DriverFactory.myDriver.wait(until.elementTextContains(storyItem, this.projectName));
    await (storyItem).click();

    const storyTitleTextField = await DriverFactory.myDriver.findElement(StoryPanel.storyTitleTextField);
    StoryPanel.locatorAux.value = StoryPanel.storyTypeSelectedLabel.value.replace("{0}", dataTable.rowsHash().StoryType.toLowerCase())
    const storyTypeSelected = await DriverFactory.myDriver.findElement(StoryPanel.locatorAux);
    let ownerNameSelected = undefined;
    if (dataTable.rowsHash().Owners !== undefined)
        ownerNameSelected = await DriverFactory.myDriver.findElement(StoryPanel.ownerNameSelectedLabel);
    
    expect((await storyTitleTextField.getText()).toString()).to.equal(this.projectName);
    expect((await storyTypeSelected.getText()).toString()).to.equal(dataTable.rowsHash().StoryType);
    if (dataTable.rowsHash().Owners !== undefined)
        expect((await ownerNameSelected.getText()).toString()).to.equal(environment.prod.userMember01.name);
});

Then('I should see the the popup window with title: {string}', async function(title){
    console.log('I should see the the popup window with title: {string}');
    let titleLabel = await DriverFactory.myDriver.findElement(StoriesTab.titleAlertDialogLabel);
    storyItem = await DriverFactory.myDriver.wait(until.elementTextContains(titleLabel, title));
    expect(titleLabel).to.not.equal(undefined);
});
