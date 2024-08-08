const { Given } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
const env = require("../../environment.json");
let chai = require('chai');
let expect = chai.expect;

Given('I am logged into Pivotal Tracker', async function () {
  const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
  const nextButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
  await usernameInput.sendKeys(env.dev.userTati.username);
  await nextButton.click();

  const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
  await passwordInput.sendKeys(env.dev.userTati.password);

  const loginButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
  await loginButton.click();

  // Verifica que la URL actual sea la de la página de introducción
  const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
  expect(currentUrl).to.equal('https://www.pivotaltracker.com/introduction');
});