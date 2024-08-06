const { Builder, Browser, WebDriver } = require("selenium-webdriver");
require("chromedriver");

class ChromeSingleton{
    /** @type {WebDriver} */
    static chrome;
    
    static async createInstance(){
        if(!this.chrome){
            this.chrome = await new Builder().forBrowser(Browser.CHROME).build();
            console.log("Driver started", await this.chrome.getSession());
        }else{
            console.log("Driver already exists");
        }
    }

    static async closeInstance(){
        console.log("Closing browser");
        await this.chrome.close();
        try {
            await this.chrome.quit();
        }catch(error){
            console.log("Failed to close browser");
        }
        this.chrome = null;
        console.log("Browser closed");
    }
}

module.exports = ChromeSingleton