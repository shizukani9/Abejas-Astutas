const { By } = require("selenium-webdriver");

class ProjectStoriesPage {

    projectTitle = By.css('.raw_context_name');
}

module.exports = new ProjectStoriesPage();