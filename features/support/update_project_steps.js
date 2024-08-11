const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const LoginPage = require('../../main/ui/login_page');
const IntroductionPage = require('../../main/ui/introduction_page');
const ProjectSettingsPage = require('../../main/ui/project_settings_page');
const environment = require('../../environment.json').prod;
const DriverFactory = require('../../core/ui/driverFactory');
const { until } = require('selenium-webdriver');

let driver;

Given('que he creado un proyecto y estoy en la página de configuración del proyecto', async function () {
    driver = await DriverFactory.getDriverInstance();
    await driver.get(environment.urlUI + 'signin');

    await driver.manage().window().setRect({ width: 1440, height: 900 }); // Ajuste de ventana

    // Realiza el login usando los métodos de LoginPage
    await LoginPage.login(driver, environment.userAdmin.username, environment.userAdmin.password);

    // Espera hasta que la URL de introducción sea cargada
    await driver.wait(until.urlContains(environment.introductionPage), 30000);

    // Crear un nuevo proyecto usando los métodos de IntroductionPage
    await IntroductionPage.createNewProject(driver, 'Prueba');

    // Navega a la configuración del proyecto
    await ProjectSettingsPage.navigateToProjectSettings(driver);
});


When('cambio el Título del Proyecto a {string}', async function (projectTitle) {
    await ProjectSettingsPage.changeProjectTitle(driver, projectTitle);
});

When('cambio la Descripción del Proyecto a {string}', async function (description) {
    await ProjectSettingsPage.changeProjectDescription(driver, description);
});

When('cambio el Inicio de Iteraciones a {string}', async function (iterationStart) {
    await ProjectSettingsPage.changeIterationStart(driver, iterationStart);
});

When('cambio la Fecha de Inicio del Proyecto a {string}', async function (startDate) {
    await ProjectSettingsPage.changeProjectStartDate(driver, startDate);
});

When('cambio la Zona Horaria del Proyecto a {string}', async function (timeZone) {
    await ProjectSettingsPage.changeTimeZone(driver, timeZone);
});

When('cambio la Escala de Puntos a {string}', async function (pointScale) {
    await ProjectSettingsPage.changePointScale(driver, pointScale);
});

When('guardo los cambios', async function () {
    await ProjectSettingsPage.saveChanges(driver);
});

Then('debería ver los cambios guardados correctamente', async function () {
    await ProjectSettingsPage.verifyChanges(driver);
});

Then('elimino el proyecto', async function () {
    await ProjectSettingsPage.deleteProject(driver);
});

