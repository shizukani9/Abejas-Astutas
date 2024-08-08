const { When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const IntroductionPage = require("../../main/ui/introduction_page");
const LoginPage = require("../../main/ui/login_page");
let chai = require('chai');
let expect = chai.expect;
const { until } = require('selenium-webdriver');  // Importa el módulo until

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

  // Ingresa el nombre del proyecto y crea el proyecto
  await nameFirstProjectInput.sendKeys(dataTable.rowsHash().NameFirstProject);
  await createProjectButton.click();
});

Then('I should see the project dashboard with the title', async function () {

   // Esperar hasta que el elemento con el nombre del proyecto esté presente
  const projectTitleElement = await DriverFactory.myDriver.wait(until.elementLocated({ css: '.raw_context_name' }), 10000);
  
  // Verifica que el texto del elemento sea igual al nombre del proyecto creado
  const projectTitle = await projectTitleElement.getText();
  expect(projectTitle).to.equal('ProjectTest');


});