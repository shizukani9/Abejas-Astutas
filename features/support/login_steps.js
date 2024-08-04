const { Given } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
const { until } = require("selenium-webdriver");

Given('I set the login credentials with:', async function(dataTable){
    await DriverFactory.myDriver.wait(
        until.elementLocated(LoginPage.usernameInput)
    );
    await DriverFactory.myDriver.wait(
        until.elementLocated(LoginPage.passwordInput)
    );
    const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
    const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(usernameInput)); 
    await DriverFactory.myDriver.wait(until.elementIsVisible(passwordInput)); 
    await usernameInput.sendKeys(dataTable.rowHash().Username);
    await passwordInput.sendKeys(dataTable.rowHash().Password);

    await DriverFactory.myDriver.sleep(50000);

});