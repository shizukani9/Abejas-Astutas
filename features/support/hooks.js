const { Before, After } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Before( { tags: "@ui" }, async function(){
    console.log("Starting Framework");
    this.driver = await new DriverFactory();
    console.log("Starting Browser");
    await this.driver.get("https://www.pivotaltracker.com/signin?source=navbar");
});

After({ tags: "@ui" },async function(){
    await DriverFactory.closeDriver();
});