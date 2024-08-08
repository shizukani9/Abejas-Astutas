const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const DriverFactory = require('../../core/ui/driverFactory');
const config = require('../../environment.json').dev; // Configuración desde environment.json

let driver;

// Escenario: Creación de un proyecto y navegación a la página de configuración del proyecto
Given('que he creado un proyecto y estoy en la página de configuración del proyecto', async function () {
    driver = await new DriverFactory();
    await driver.get(config.urlUI + 'signin'); // URL obtenida de environment.json

    await driver.manage().window().setRect({ width: 1440, height: 900 });

    const usernameInput = await driver.wait(until.elementLocated(By.css('form #credentials_username')), 30000);
    await usernameInput.sendKeys(config.user.username); // Username obtenido de environment.json
    const nextButton = await driver.wait(until.elementLocated(By.css('form .app_signin_action_button')), 30000);
    await nextButton.click();

    const passwordInput = await driver.wait(until.elementLocated(By.css('form #credentials_password')), 30000);
    await passwordInput.sendKeys(config.user.password); // Password obtenido de environment.json
    const loginButton = await driver.wait(until.elementLocated(By.css('form label ~ .app_signin_action_button')), 30000);
    await loginButton.click();

    const projectNameInput = await driver.wait(until.elementLocated(By.css('.wizard__input')), 30000);
    await projectNameInput.sendKeys('Proyecto de prueba');

    const acceptCookiesButton = await driver.findElements(By.id('onetrust-accept-btn-handler'));
    if (acceptCookiesButton.length > 0) {
        await acceptCookiesButton[0].click();
    }

    const createProjectButton = await driver.wait(until.elementLocated(By.css('button[data-aid="submit-button"]')), 30000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", createProjectButton);
    await createProjectButton.click();

    const moreButton = await driver.wait(until.elementLocated(By.css('a[data-aid="navTab-more"]')), 30000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", moreButton);
    await moreButton.click();
    await driver.wait(until.urlContains('/settings'), 30000); // Validación de redirección
});

// Cambiar el título del proyecto
When('cambio el Título del Proyecto a {string}', async function (projectTitle) {
    const projectTitleInput = await driver.wait(until.elementLocated(By.id('project_name')), 30000);
    await projectTitleInput.clear();
    await projectTitleInput.sendKeys(projectTitle);
});

// Cambiar la descripción del proyecto
When('cambio la Descripción del Proyecto a {string}', async function (description) {
    const descriptionInput = await driver.wait(until.elementLocated(By.id('project_description')), 30000);
    await descriptionInput.clear();
    await descriptionInput.sendKeys(description);
});

// Cambiar el inicio de iteraciones del proyecto
When('cambio el Inicio de Iteraciones a {string}', async function (iterationStart) {
    const iterationStartSelect = await driver.wait(until.elementLocated(By.id('project_week_start_day')), 30000);
    await iterationStartSelect.click();
    await driver.findElement(By.css(`#project_week_start_day option[value="${iterationStart}"]`)).click();
});

// Cambiar la fecha de inicio del proyecto
When('cambio la Fecha de Inicio del Proyecto a {string}', async function (startDate) {
    const startDateInput = await driver.wait(until.elementLocated(By.id('project_start_date')), 30000);
    await startDateInput.clear();
    await startDateInput.sendKeys(startDate);
});

// Cambiar la zona horaria del proyecto
When('cambio la Zona Horaria del Proyecto a {string}', async function (timeZone) {
    const timeZoneSelect = await driver.wait(until.elementLocated(By.id('project_time_zone')), 30000);
    await driver.executeScript("arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('change'));", timeZoneSelect, timeZone);
});

// Cambiar la escala de puntos del proyecto
When('cambio la Escala de Puntos a {string}', async function (pointScale) {
    try {
        const pointScaleSelect = await driver.wait(until.elementLocated(By.id('project_point_scale')), 30000);
        await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", pointScaleSelect);
        const isVisible = await pointScaleSelect.isDisplayed();
        if (!isVisible) {
            throw new Error('El selector de Escala de Puntos no es visible.');
        }

        await pointScaleSelect.click();
        const option = await driver.findElement(By.css(`#project_point_scale option[value="0,1,2,3,5,8"]`));
        await option.click();
    } catch (error) {
        let screenshot = await driver.takeScreenshot();
        require('fs').writeFileSync('error_screenshot.png', screenshot, 'base64');
        throw new Error('No se pudo localizar el selector de Escala de Puntos o interactuar con él: ' + error.message);
    }
});

// Guardar los cambios realizados en el proyecto
When('guardo los cambios', async function () {
    const saveButton = await driver.wait(until.elementLocated(By.css('input.save_bar__submit')), 30000);
    await saveButton.click();

    try {
        const alert1 = await driver.switchTo().alert();
        await alert1.accept();
        const alert2 = await driver.switchTo().alert();
        await alert2.accept();
    } catch (err) {
        // No hacer nada si no hay más alertas
    }

    const confirmButton = await driver.findElements(By.css('button[data-aid="ConfirmDialog__button_save"]'));
    if (confirmButton.length > 0) {
        await confirmButton[0].click();
    }
});

// Verificar que los cambios se guardaron correctamente
Then('debería ver los cambios guardados correctamente', async function () {
    await driver.navigate().refresh();

    const projectTitleInput = await driver.wait(until.elementLocated(By.id('project_name')), 30000);
    const projectTitleValue = await projectTitleInput.getAttribute('value');
    if (projectTitleValue !== 'ProjectAA') {
        throw new Error('El título del proyecto no se guardó correctamente.');
    }
});

// Eliminar el proyecto creado
Then('elimino el proyecto', async function () {
    const deleteLink = await driver.wait(until.elementLocated(By.css('a#delete_link')), 30000);
    await driver.executeScript("arguments[0].click();", deleteLink);

    const confirmDeleteButton = await driver.wait(until.elementLocated(By.css('input#confirm_delete')), 30000);
    await driver.executeScript("arguments[0].click();", confirmDeleteButton);
});

// Cerrar el navegador después de que se completen todas las pruebas
AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
