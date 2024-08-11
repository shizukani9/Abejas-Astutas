const { By, until } = require('selenium-webdriver');

class ProjectSettingsPage {
    projectTitleInput = By.css('#project_name');
    descriptionInput = By.css('#project_description');
    iterationStartSelect = By.css('#project_week_start_day');
    startDateInput = By.css('#project_start_date');
    timeZoneSelect = By.css('#project_time_zone');
    pointScaleSelect = By.css('#project_point_scale');
    saveButton = By.css('input.save_bar__submit');
    deleteLink = By.css('a#delete_link');
    confirmDeleteButton = By.css('input#confirm_delete');
    projectSettingIcon = By.css('span[data-balloon="Project settings"]');
    moreButton = By.css('a[data-aid="navTab-more"]');

    async changeProjectTitle(driver, title) {
        const projectTitleInput = await driver.wait(until.elementLocated(this.projectTitleInput), 30000);
        await projectTitleInput.clear();
        await projectTitleInput.sendKeys(title);
    }

    async changeProjectDescription(driver, description) {
        const descriptionInput = await driver.wait(until.elementLocated(this.descriptionInput), 30000);
        await descriptionInput.clear();
        await descriptionInput.sendKeys(description);
    }

    async changeIterationStart(driver, iterationStart) {
        const iterationStartSelect = await driver.wait(until.elementLocated(this.iterationStartSelect), 30000);
        await iterationStartSelect.click();
        await driver.findElement(By.css(`#project_week_start_day option[value="${iterationStart}"]`)).click();
    }

    async changeProjectStartDate(driver, startDate) {
        const startDateInput = await driver.wait(until.elementLocated(this.startDateInput), 30000);
        await startDateInput.clear();
        await startDateInput.sendKeys(startDate);
    }

    async changeTimeZone(driver, timeZone) {
        const timeZoneSelect = await driver.wait(until.elementLocated(this.timeZoneSelect), 30000);
        await driver.executeScript("arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('change'));", timeZoneSelect, timeZone);
    }

    async changePointScale(driver, pointScale) {
        try {
            const pointScaleSelect = await driver.wait(until.elementLocated(this.pointScaleSelect), 30000);
            await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", pointScaleSelect);
            await pointScaleSelect.click();
            const option = await driver.findElement(By.css(`#project_point_scale option[value="0,1,2,3,5,8"]`));
            await option.click();
        } catch (error) {
            console.error('Error al cambiar la Escala de Puntos: ' + error.message);
            let screenshot = await driver.takeScreenshot();
            require('fs').writeFileSync('error_screenshot.png', screenshot, 'base64');
            throw new Error('No se pudo localizar el selector de Escala de Puntos o interactuar con él.');
        }
    }

    async saveChanges(driver) {
        const saveButton = await driver.wait(until.elementLocated(this.saveButton), 30000);
        await saveButton.click();

        // Manejo de posibles alertas
        try {
            const alert1 = await driver.switchTo().alert();
            await alert1.accept();

            const alert2 = await driver.switchTo().alert();
            await alert2.accept();
        } catch (err) {
            // No hacer nada si no hay más alertas
        }

        // Confirmar diálogo de guardado si existe
        const confirmButton = await driver.findElements(By.css('button[data-aid="ConfirmDialog__button_save"]'));
        if (confirmButton.length > 0) {
            await confirmButton[0].click();
        }
    }

    async verifyChanges(driver) {
        await driver.navigate().refresh();

        const projectTitleInput = await driver.wait(until.elementLocated(this.projectTitleInput), 30000);
        const projectTitleValue = await projectTitleInput.getAttribute('value');
        if (projectTitleValue !== 'ProjectAA') {
            throw new Error('El título del proyecto no se guardó correctamente.');
        }
    }

    async deleteProject(driver) {
        const deleteLink = await driver.wait(until.elementLocated(this.deleteLink), 30000);
        await driver.executeScript("arguments[0].click();", deleteLink);

        const confirmDeleteButton = await driver.wait(until.elementLocated(this.confirmDeleteButton), 30000);
        await driver.executeScript("arguments[0].click();", confirmDeleteButton);
    }

    async navigateToProjectSettings(driver) {
        try {
            const moreButton = await driver.wait(until.elementLocated(By.css('a[data-aid="navTab-more"]')), 30000);
            await driver.executeScript("arguments[0].scrollIntoView(true);", moreButton);
            await moreButton.click();
            await driver.wait(until.urlContains('/settings'), 30000);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProjectSettingsPage();
