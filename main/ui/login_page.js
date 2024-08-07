const { By } = require("selenium-webdriver");

class LoginPage{
    usernameInput = By.css('form #credentials_username');
    passwordInput = By.css('form #credentials_password');
    nextButton = By.css('form .app_signin_action_button');
    loginButton = By.css('form label ~ .app_signin_action_button');

    //cookies button
    cookiesButton = By.css('button.onetrust-close-btn-handler.ot-close-icon.banner-close-button'); //comentar
}

module.exports = new LoginPage();