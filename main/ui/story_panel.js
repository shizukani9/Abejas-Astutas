const { By } = require("selenium-webdriver");

class StoryPanel{
    storyTitleTextField = By.css('.backlog.current_backlog form textarea');
    storyTypeDropdown = By.css('.backlog.current_backlog div[class="dropdown story_type"]');
    bugOptionDropdown = By.css('.div[class="dropdown_menu search"] a[class="item_bug "]');
    saveButton = By.css('.backlog.current_backlog .autosaves.button');
}

module.exports = new StoryPanel();