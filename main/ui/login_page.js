const { By } = require("selenium-webdriver");

class LoginPage{
    usernameInput = By.css('form #credentials_username');
    passwordInput = By.css('form #credentials_password');
    nextButton = By.css('form .app_signin_action_button');
    loginButton = By.css('form label ~ .app_signin_action_button');
    cookiesButton = By.css('div .banner-close-btn-container button');
}

module.exports = new LoginPage();