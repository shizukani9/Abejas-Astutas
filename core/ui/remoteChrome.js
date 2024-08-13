const { Builder } = require("selenium-webdriver");
const configuration = require("../../configuration.json");
require("chromedriver");

module.exports = class RemoteDriver {
    constructor(configuration) {
        const capabilities = {
            browserName: configuration.remoteBrowser.browserName,
            "bstack:options": {
              "os": configuration.remoteBrowser.os,
              "osVersion": configuration.remoteBrowser.osVersion,
              "browserName": configuration.remoteBrowser.browserName,
              "browserVersion": configuration.remoteBrowser.browserVersion,
              "local": configuration.remoteBrowser.local,
              "seleniumVersion": configuration.remoteBrowser.seleniumVersion
            }
        }
        const remoteDriver = new Builder()
            .usingServer("http://"+configuration.remoteBrowser.userKey+":"+configuration.remoteBrowser.passwordKey+"@hub.browserstack.com/wd/hub")
            .withCapabilities(capabilities)
            .build();
        return remoteDriver;
    }
};