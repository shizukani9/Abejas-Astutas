const { By } = require("selenium-webdriver");

class StoryPanel{
    storyTitleTextField = By.css('.backlog.current_backlog form textarea');
    storyTypeDropdown = By.css('.backlog.current_backlog div[class="dropdown story_type"]');
    storyOptionInDropdown = By.css('div[class="dropdown_menu search"] a[class="item_{0} "]');
    storyTypeSelectedLabel = By.css('.backlog.current_backlog a[class="selection item_{0}"] span');
    ownerNameSelectedLabel = By.css('.backlog.current_backlog .story_owners .name');
    ownerPlusIcon = By.css('.backlog.current_backlog .add_owner.selected');
    ownerSelect = By.css('.lightbox.owner.add_owner .name');
    saveButton = By.css('.backlog.current_backlog .autosaves.button');
    
    locatorAux = By.css('');
}

module.exports = new StoryPanel();