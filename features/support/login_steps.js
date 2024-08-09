const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
const env = require("../../environment.json");
let chai = require('chai');
let expect = chai.expect;

Given('I set the login credentials with:', async function(){
   
    const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
    const nextButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
    await usernameInput.sendKeys(env.dev.userTati.username);
    await nextButton.click();

    const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
    await passwordInput.sendKeys(env.dev.userTati.password);

    //cookies button
    try {
        const cookiesButton = await DriverFactory.myDriver.wait(
            until.elementLocated(LoginPage.cookiesButton)
            ,10000
        );
        await cookiesButton.click();
    } catch (error) {
        console.log("No se encontró la ventana emergente de cookies o ya fue cerrada.");
    }

});

When('I try to login the application', async function(){
    const loginButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
    await loginButton.click();
});

Then('I should see the Introduction page', async function(){
    expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://www.pivotaltracker.com/introduction');
});