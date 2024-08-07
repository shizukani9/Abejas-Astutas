const { Given, When, Then } = require('@cucumber/cucumber');
const DriverFactory = require('../../core/ui/driverFactory');
const CreateProjectPage = require('../../main/ui/create_project_page');
const LoginPage = require('../../main/ui/login_page');
const DashboardPage = require('../../main/ui/dashboard_page');
let chai = require('chai');
let expect = chai.expect;

Given('The user has logged in to Pivotal Tracker', async function (dataTable) {
    const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
    const nextButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);

    await usernameInput.sendKeys(dataTable.rowsHash().Username);

    //cookies button
   // const cookiesButton = await DriverFactory.myDriver.findElement(LoginPage.cookiesButton); //comentar
   // await cookiesButton.click(); //comentar

    await nextButton.click();

    const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
    await passwordInput.sendKeys(dataTable.rowsHash().Password);

    const loginButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
    await loginButton.click();
});

When('The user creates a new project named:', async function (dataTable) {

    //cookies button
    const cookiesButton = await DriverFactory.myDriver.findElement(LoginPage.cookiesButton); //comentar
    await cookiesButton.click(); //comentar
    
    const nameProjectInput = await DriverFactory.myDriver.findElement(CreateProjectPage.nameProjectInput);
    const createProjectButton = await DriverFactory.myDriver.findElement(CreateProjectPage.createProjectButton);
    
    await nameProjectInput.sendKeys(dataTable.rowsHash().ProjectName);
    await createProjectButton.click();

});

Then('The new project should be listed on the project dashboard', async function () {
    //expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://www.pivotaltracker.com/dashboard');
});