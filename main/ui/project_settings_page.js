const { By } = require("selenium-webdriver");

class ProjectSettingsPage{
    deleteLink = By.css('.form_table.other #delete_link');
    deleteButton = By.css('#confirm_delete');
}

module.exports = new ProjectSettingsPage();