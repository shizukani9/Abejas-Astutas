const { By } = require("selenium-webdriver");

class Header{
    projectNameLabel = By.css('header[data-aid="PageHeader"] span[class="raw_context_name"]');
}

module.exports = new Header();