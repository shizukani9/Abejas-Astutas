const { By } = require("selenium-webdriver");

class StoriesTab{
    addStoryButton = By.css('.backlog.current_backlog button[title="Add Story"]');
    previewStoryItemRow = By.css('.backlog div[data-aid="StoryPreviewItem"] span[class="tracker_markup"]');
    deleteStoryButton = By.css('button.autosaves.delete[title="Delete this story"]');
    confirmDeleteButton = By.css('button.SMkCk__Button.SSqkh__Button--warning[data-aid="DeleteButton"]');
    emptyMessageText = By.css('span.empty_message_text');
    logoImage = By.css('img.headerLogo__image');
    profileDropdownButton = By.css('button.zWDds__Button.TtSTu__Button--header.Dropdown__button[aria-label="Profile Dropdown"]');
    signOutButton = By.css('button.Dropdown__option.selected.Dropdown__option--button[data-aid="ProfileDropdown__signout"]');
    projectNameLabel = By.css('.raw_context_name');
}

module.exports = new StoriesTab();