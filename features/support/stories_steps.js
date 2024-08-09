const { Given, When, Then,  } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const StoriesTab = require("../../main/ui/stories_tab");
const StoryPanel = require("../../main/ui/story_panel");
let chai = require('chai');
let expect = chai.expect;

When('I create a new story in backlog panel with following information:', async function(dataTable){
    const addStoryButton = await DriverFactory.myDriver.findElement(StoriesTab.addStoryButton);
    await addStoryButton.click();

    const storyTitleTextField = await DriverFactory.myDriver.findElement(StoryPanel.storyTitleTextField);
    const storyTypeDropdown = await DriverFactory.myDriver.findElement(StoryPanel.storyTypeDropdown);
    console.log(dataTable.rowsHash().Title);
    await storyTitleTextField.sendKeys(dataTable.rowsHash().Title);
    await storyTypeDropdown.click();
    const bugOptionDropdown = await DriverFactory.myDriver.findElement(StoryPanel.bugOptionDropdown);
    await bugOptionDropdown.click();
    await DriverFactory.myDriver.sleep(5000);
    const saveButton = await DriverFactory.myDriver.findElement(StoryPanel.saveButton);
    await saveButton.click();
    await DriverFactory.myDriver.sleep(5000);
});

Then('I should see the story with name: {string} in backlog panel', async function(storyName){
    const storyItemList = await DriverFactory.myDriver.findElements(StoriesTab.previewStoryItemRow);
    expect(storyItemList.length).to.equal(1);
});

Then('I should see the story in backlog panel with following information:', async function(dataTable){
    const storyItem = (await DriverFactory.myDriver.findElements(StoriesTab.previewStoryItemRow)).pop();
    await storyItem.click();

    const storyTitleTextField = await DriverFactory.myDriver.findElement(StoryPanel.storyTitleTextField);
    const storyTypeDropdown = await DriverFactory.myDriver.findElement(StoryPanel.storyTypeDropdown);
    console.log(storyTitleTextField.getText());
    console.log(storyTypeDropdown.getText());
});
