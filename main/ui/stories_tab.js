const { By } = require("selenium-webdriver");

class StoriesTab{
    addStoryButton = By.css('.backlog.current_backlog button[title="Add Story"]');
    previewStoryItemRow = By.css('.backlog.current_backlog section span[class="tracker_markup"]');
}

module.exports = new StoriesTab();