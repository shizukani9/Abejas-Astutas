const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
let chai = require('chai');
let expect = chai.expect;
const { until } = require("selenium-webdriver");

Given('I set the login credentials with:', async function(dataTable){
    const usernameInput = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.usernameInput));
    const nextButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.nextButton));
    await usernameInput.sendKeys(dataTable.rowsHash().Username);
    await nextButton.click();

    const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.passwordInput));
    await passwordInput.sendKeys(dataTable.rowsHash().Password);
});

When('I try to login the application', async function(){
    const loginButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.nextButton));
    await loginButton.click();
});

Then('I should see the Introduction page', async function(){
    expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://www.pivotaltracker.com/introduction');
});
