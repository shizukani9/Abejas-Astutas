const { By } = require("selenium-webdriver");

class DashboardPage{
    dashboardTabsDiv = By.css('.Dashboard .Dashboard__Tabs');
}

module.exports = new DashboardPage();