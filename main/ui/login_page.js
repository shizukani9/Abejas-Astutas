const { By } = require("selenium-webdriver");

class LoginPage{
    usernameInput = By.css('form #credentials_username');
    passwordInput = By.css('form #credentials_password');
    nextButton = By.css('form .app_signin_action_button');
    loginButton = By.css('form label ~ .app_signin_action_button');

    //cookies button
    cookiesButton = By.css('.app_cookie_policy_accept_button');
}
module.exports = new LoginPage();