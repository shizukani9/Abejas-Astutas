const { By } = require("selenium-webdriver");

class LoginPage{
    usernameInput = By.css('[data-test="username"]');
    passwordInput = By.css('[data-test="password"]');
    loginButton = By.css('[name="login-button"]');
}

module.exports = new LoginPage();