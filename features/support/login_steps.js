const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
const DashboardPage = require("../../main/ui/dashboard_page");
let chai = require('chai');
let expect = chai.expect;

Given('I set the login credentials with:', async function(dataTable){
    
    const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
    const nextButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);

    await usernameInput.sendKeys(dataTable.rowsHash().Username);
    await nextButton.click();

    const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
    await passwordInput.sendKeys(dataTable.rowsHash().Password);
});

When('I try to login the application', async function(){
    const loginButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
    await loginButton.click();
});

Then('I should see the Dashboard page', async function(){
    //expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://www.pivotaltracker.com/dashboard');
});