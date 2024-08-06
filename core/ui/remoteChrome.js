const { Builder, Browser } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
require("chromedriver");

const chromeOptions = new Options();

module.exports = class RemoteChromeDriver {
    constructor(configuration) {
            return (async () => {
                console.log("Creating Driver with: ", configuration)
                /*if(configuration.browser.headless){
                    chromeOptions.addArguments("--headless");
                }*/
                return await new Builder()
                .forBrowser(Browser.CHROME)
                /*.setChromeOptions(
                    chromeOptions.windowSize(configuration.browser.resolution)
                )*/
               .usingServer(URL)
                .build();
            })();
        }
};