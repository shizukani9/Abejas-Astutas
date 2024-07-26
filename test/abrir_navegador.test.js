const { Builder } = require('selenium-webdriver');
require('chromedriver');

(async function openPivotalTracker() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.pivotaltracker.com/');
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await driver.quit();
    }
    
})();
