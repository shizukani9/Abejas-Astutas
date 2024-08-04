const { Before, After } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");

Before( { tags: "@ui" }, async function(){
    console.log("Starting Framework");
    this.driver = await new DriverFactory();
    console.log("Starting Browser");
    await this.driver.get("https://www.saucedemo.com/");
});

After({ tags: "@ui" },async function(){
    await DriverFactory.closeDriver();
});