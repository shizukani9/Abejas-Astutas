const { By } = require("selenium-webdriver");

class ProjectSettingsPage{
    deleteLink = By.css('a#delete_link');
    deleteButton = By.css('#confirm_delete');
    archiveLink = By.css('a#archive_link');
    confirmArchiveButton = By.css('input#confirm_archive');
    archivedProjectsWarning = By.css('div.archived-projects-warning');
}

module.exports = new ProjectSettingsPage();