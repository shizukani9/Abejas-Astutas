const { By } = require("selenium-webdriver");

class DashboardPage{
    dashboardTabsDiv = By.css('.Dashboard .Dashboard__Tabs');
    projectSettingIcon = By.css('div:has(> span[data-balloon="{0}"]) ~ div>span[data-balloon="Project settings"]');

    locatorAux = By.css('');
}

module.exports = new DashboardPage();