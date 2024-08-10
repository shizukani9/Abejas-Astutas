const { By } = require("selenium-webdriver");

class ProjectSettingsPage{
    deleteLink = By.css('a#delete_link');
    deleteButton = By.css('#confirm_delete');
    archiveLink = By.css('a#archive_link'); // Selector usando el ID
    confirmArchiveButton = By.css('input#confirm_archive'); // Otro selector que proporcionaste
    archivedProjectsWarning = By.css('div.archived-projects-warning'); // Selector del mensaje de confirmación
}

module.exports = new ProjectSettingsPage();