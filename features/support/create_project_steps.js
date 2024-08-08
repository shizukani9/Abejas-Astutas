const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
let chai = require('chai');
let expect = chai.expect;
const IntroductionPage = require("../../main/ui/introduction_page");

Given('I am logged into Pivotal Tracker', async function (dataTable) {
  const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
  const nextButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
  await usernameInput.sendKeys(dataTable.rowsHash().Username);
  await nextButton.click();

  const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
  await passwordInput.sendKeys(dataTable.rowsHash().Password);
  

  const loginButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
  await loginButton.click();

});

When('I create a new project with the name', async function (dataTable) {

  const nameFirstProjectInput = await DriverFactory.myDriver.findElement(IntroductionPage.nameFirstProjectInput);
  const createProjectButton = await DriverFactory.myDriver.findElement(IntroductionPage.createProjectButton);
  //cookies button
  const cookiesButton = await DriverFactory.myDriver.findElement(LoginPage.cookiesButton); //comentar
  await cookiesButton.click(); //comentar
  
  await nameFirstProjectInput.sendKeys(dataTable.rowsHash().NameFirstProject);
  await createProjectButton.click();
  
});

Then('I should see the project dashboard with the title', async function () {
  //expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://www.pivotaltracker.com/dashboard');
});