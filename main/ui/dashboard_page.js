const { By } = require("selenium-webdriver");

class DashboardPage{
    dashboardTabsDiv = By.css('.Dashboard .Dashboard__Tabs');
    projectSettingIcon = By.css('div:has(> span[data-balloon="{0}"]) ~ div>span[data-balloon="Project settings"]');
    createProjectButton = By.css('#create-project-button');
    projectNameInput = By.css('form input[name="project_name"]');
    selectorAccountDropdown = By.css('form .tc-account-selector__header');
    optionOfDropdownSelector = By.css('form .tc-account-selector__option-account-name');
    createButton = By.css('form button[type="submit"]');

    locatorAux = By.css('');
}

module.exports = new DashboardPage();