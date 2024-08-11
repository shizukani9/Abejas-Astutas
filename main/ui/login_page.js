const { By } = require("selenium-webdriver");

class LoginPage {
    usernameInput = By.css('form #credentials_username');
    passwordInput = By.css('form #credentials_password');
    nextButton = By.css('form .app_signin_action_button');
    loginButton = By.css('form label ~ .app_signin_action_button');
    cookiesButton = By.css('div .banner-close-btn-container button');

    // Nuevo método agregado para realizar el login completo
    async login(driver, username, password) {
        const usernameInput = await driver.findElement(this.usernameInput);
        await usernameInput.sendKeys(username);

        const nextButton = await driver.findElement(this.nextButton);
        await nextButton.click();

        const passwordInput = await driver.findElement(this.passwordInput);
        await passwordInput.sendKeys(password);

        const loginButton = await driver.findElement(this.loginButton);
        await loginButton.click();

        // Manejar el popup de cookies si aparece
        try {
            const cookiesButton = await driver.findElement(this.cookiesButton);
            await cookiesButton.click();
        } catch (error) {
            console.log("No se encontró el botón de cookies o ya fue cerrado.");
        }
    }
}

module.exports = new LoginPage();
