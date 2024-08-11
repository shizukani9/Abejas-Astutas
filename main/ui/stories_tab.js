const { By } = require("selenium-webdriver");

class StoriesTab{
    addStoryButton = By.css('.backlog.current_backlog button[title="Add Story"]');
    previewStoryItemRow = By.css('.backlog div[data-aid="StoryPreviewItem"] span[class="tracker_markup"]');
    logoImage = By.css('img.headerLogo__image');
    profileDropdownButton = By.xpath('/html/body/div[4]/header/div[1]/div/div/header/ul/li[3]/div/div/button');
    signOutButton = By.xpath('/html/body/div[4]/header/div[1]/div/div/header/ul/li[3]/div/div/div[2]/div/div/form/button');
}

module.exports = new StoriesTab();