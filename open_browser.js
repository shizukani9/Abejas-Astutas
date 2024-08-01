
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function open_browser(){
 
    let driver = await new Builder().forBrowser("chrome").build();
 
    await driver.get("https://www.pivotaltracker.com/signin?source=navbar");
            
    await driver.quit();
 
}
 
open_browser()