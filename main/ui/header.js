const { By } = require("selenium-webdriver");

class Header{
    projectNameLabel = By.css('header[data-aid="PageHeader"] span[class="raw_context_name"]');
    membersButton = By.css('a[data-aid="navTab-members"]');
}

module.exports = new Header();