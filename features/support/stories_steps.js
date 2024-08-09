const { When, Then,  } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const StoryPanel = require("../../main/ui/story_panel");
const configuration = require("../../configuration.json");
const environment = require("../../environment.json");
const { until } = require("selenium-webdriver");
let chai = require('chai');
let expect = chai.expect;

When('I create a new story in backlog panel with following information:', async function(dataTable){
    console.log('I create a new story in backlog panel with following information:');
    const addStoryButton = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.addStoryButton));
    await DriverFactory.myDriver.wait(until.elementIsVisible(addStoryButton), configuration.browser.timeout);
    await addStoryButton.click();

    const storyTitleTextField = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.storyTitleTextField));
    const storyTypeDropdown = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.storyTypeDropdown));
    const ownerPlusIcon = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.ownerPlusIcon));
    await storyTitleTextField.sendKeys(dataTable.rowsHash().Title);
    await storyTypeDropdown.click();
    const bugOptionDropdown = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.bugOptionDropdown));
    await bugOptionDropdown.click();
    console.log(environment.prod.userMember01.name);
    await ownerPlusIcon.click();
    const ownerList = await DriverFactory.myDriver.wait(until.elementsLocated(StoryPanel.ownerSelect));
    for (let i = 0; i < ownerList.length; i++) {
        const element = ownerList.pop();
        console.log(element.getText().toString());
        if (element.getText().toString() === environment.prod.userMember01.name)
            console.log(element.getText().toString());
            await element.click();
    
    }
    const saveButton = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.saveButton));
    await saveButton.click();
    await DriverFactory.myDriver.wait(until.elementIsVisible(addStoryButton), configuration.browser.timeout);
});

Then('I should see the story with name: {string} in backlog panel', async function(storyName){
    console.log('I should see the story with name: {string} in backlog panel');
    let storyItem = await DriverFactory.myDriver.findElement(StoriesTab.previewStoryItemRow);
    storyItem = await DriverFactory.myDriver.wait(until.elementTextContains(storyItem, storyName));
    expect(storyItem).to.not.equal(undefined);
});

Then('I should see the story in backlog panel with following information:', async function(dataTable){
    console.log('I should see the story in backlog panel with following information:');
    let storyItem = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.previewStoryItemRow));
    storyItem = await DriverFactory.myDriver.wait(until.elementTextContains(storyItem, dataTable.rowsHash().Title));
    await (storyItem).click();

    const storyTitleTextField = await DriverFactory.myDriver.findElement(StoryPanel.storyTitleTextField);
    const storyTypeSelected = await DriverFactory.myDriver.findElement(StoryPanel.storyTypeSelectedLabel);
    const ownerNameSelected = await DriverFactory.myDriver.findElement(StoryPanel.ownerNameSelectedLabel);
    
    expect((await storyTitleTextField.getText()).toString()).to.equal(dataTable.rowsHash().Title);
    expect((await storyTypeSelected.getText()).toString()).to.equal(dataTable.rowsHash().StoryType);
    expect((await ownerNameSelected.getText()).toString()).to.equal(environment.prod.userMember01.name);
});
