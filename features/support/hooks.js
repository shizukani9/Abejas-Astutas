const { Before, After } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
const environment = require("../../environment.json");
const RandomValues = require("../../features/support/random_values");
var {setDefaultTimeout} = require('@cucumber/cucumber');
const LoginPage = require("../../main/ui/login_page");
const IntroductionPage = require("../../main/ui/introduction_page");
const DashboardPage = require("../../main/ui/dashboard_page");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
setDefaultTimeout(60 * 1000);

Before( { tags: "@ui" }, async function(){
    console.log("Starting Framework");
    this.driver = await new DriverFactory();
    console.log("Starting Browser");
    await this.driver.get("https://www.pivotaltracker.com/signin?source=navbar");
    
});

Before( { tags: "@login" }, async function(){
    console.log("Starting Login");
    const usernameInput = await DriverFactory.myDriver.findElement(LoginPage.usernameInput);
    const nextButton = await DriverFactory.myDriver.findElement(LoginPage.nextButton);
    await usernameInput.sendKeys(environment.prod.userAdmin.username);
    await nextButton.click();

    const passwordInput = await DriverFactory.myDriver.findElement(LoginPage.passwordInput);
    await passwordInput.sendKeys(environment.prod.userAdmin.password);

    const loginButton = await DriverFactory.myDriver.findElement(LoginPage.loginButton);
    await loginButton.click();
});

Before( { tags: "@createFirstProject" }, async function(){
    const projectNameInput = await DriverFactory.myDriver.findElement(IntroductionPage.nameFirstProjectInput);
    const createProjectButton = await DriverFactory.myDriver.findElement(IntroductionPage.createProjectButton);
    this.firstProjectName = RandomValues.alphanumeric(6);
    await projectNameInput.sendKeys(this.firstProjectName);
    await createProjectButton.click();
    await DriverFactory.myDriver.sleep(10000);
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
    console.log(this.firstProjectId)

});

After({ tags: "@deleteFirstProject" },async function(scenario){
    const tags = scenario.pickle.tags;
    if (!!tags.find(tag => { return tag.name === '@createFirstProject'})) {
        await DriverFactory.myDriver.get("https://www.pivotaltracker.com/projects/"+this.firstProjectId+"/settings");
        await DriverFactory.myDriver.sleep(10000);
        const deleteLink = await DriverFactory.myDriver.findElement(ProjectSettingsPage.deleteLink);
        //await DriverFactory.myDriver.manage().window().scrollFromElement(deleteLink);
        await deleteLink.click();
        const deleteButton = await DriverFactory.myDriver.sen(ProjectSettingsPage.deleteButton);
        await deleteButton.click();
    }
});

After({ tags: "@ui" },async function(){
    //await DriverFactory.closeDriver();
});