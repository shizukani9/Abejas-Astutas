const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const IntroductionPage = require("../../main/ui/introduction_page");
const LoginPage = require("../../main/ui/login_page");
const ProjectStoriesPage = require("../../main/ui/project_stories_page");
let chai = require('chai');
let expect = chai.expect;
const { until } = require('selenium-webdriver'); 

When('I create a new project with the name', async function (dataTable) {
  const nameFirstProjectInput = await DriverFactory.myDriver.findElement(IntroductionPage.nameFirstProjectInput);
  const createProjectButton = await DriverFactory.myDriver.findElement(IntroductionPage.createProjectButton);

  // Maneja el botón de cookies si aparece
  try {
    const cookiesButton = await DriverFactory.myDriver.findElement(LoginPage.cookiesButton);
    await cookiesButton.click();
  } catch (error) {
    console.log("No se encontró la ventana emergente de cookies o ya fue cerrada.");
  }

  await nameFirstProjectInput.sendKeys(dataTable.rowsHash().NameFirstProject);
  await createProjectButton.click();
});

Then('I should see the project dashboard with the title', async function () {

  const projectTitleElement = await DriverFactory.myDriver.wait(until.elementLocated(ProjectStoriesPage.projectTitle), 10000);
  
  const projectTitle = await projectTitleElement.getText();
  expect(projectTitle).to.equal('ProjectTest');

});