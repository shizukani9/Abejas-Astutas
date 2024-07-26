const { Builder } = require('selenium-webdriver');
require('chromedriver');

const getDriver = () => {
    return new Builder().forBrowser('chrome').build();
};

module.exports = { getDriver };