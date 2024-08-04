const { Builder, Browser } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/firefox");

const firefoxOptions = new Options();

module.exports = class FirefoxDriver {
    constructor(configuration) {
            return (async () => {
                console.log("Creating Driver with: ", configuration)
                if(configuration.browser.headless){
                    firefoxOptions.addArguments("--headless");
                }
                return await new Builder()
                .forBrowser(Browser.FIREFOX)
                .setFirefoxOptions(
                    firefoxOptions.windowSize(configuration.browser.resolution)
                )
                .build();
            })();
        }
};