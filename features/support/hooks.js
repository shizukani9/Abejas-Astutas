const { Before, After, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const DriverFactory = require("../../core/ui/driverFactory");
const RandomValues = require("../../features/support/random_values");
const LoginPage = require("../../main/ui/login_page");
const IntroductionPage = require("../../main/ui/introduction_page");
const ProjectSettingsPage = require("../../main/ui/project_settings_page");
const MembersTab = require("../../main/ui/members_tab");
const { until, Key } = require("selenium-webdriver");
var { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);
let loginHook = false;
let isCookieEnabled = false;

BeforeAll({ tags: "@ui" }, async function(){
    console.log("Starting Framework");
    this.driver = await DriverFactory.getDriverInstance();
    console.log("Starting Browser");
    await this.driver.get("https://www.pivotaltracker.com/signin?source=navbar");
    await this.driver.manage().window().setRect(configuration.browser.resolution);
});

Before( { tags: "@login" }, async function(scenario){
    console.log("Test scenario: " + scenario.pickle.name);
    if ((loginHook === undefined) || (loginHook === false)){
        console.log("Starting Login");
        const usernameInput = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.usernameInput));
        const nextButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.nextButton));
        await usernameInput.sendKeys(environment.prod.userAdmin.username);
        await nextButton.click();

        const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.passwordInput));
        await passwordInput.sendKeys(environment.prod.userAdmin.password);

        if (!isCookieEnabled){
            try {
                const cookiesButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.cookiesButton));
                    await cookiesButton.click();
                    isCookieEnabled = true;
                } catch (error) {
                    console.log("No se encontró la ventana emergente de cookies o ya fue cerrada."+error);
                }
        }
        const loginButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.loginButton));
        await loginButton.click();
    }
    loginHook = true;
});

Before({ tags: "@createFirstProject" }, async function(){
    console.log("Starting to create first project");
    const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
    const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
    this.firstProjectName = RandomValues.alphanumeric(6);
    await projectNameInput.sendKeys(this.firstProjectName);
    await createProjectButton.click();
    await DriverFactory.myDriver.wait(until.urlContains("projects"));
    this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
    this.createFirstProjectHook = true;
});

Before({ tags: "@addAMemberToProject" }, async function(){
    console.log("Starting to add a member to project");
    if ((this.addAMemberToProjectHook === undefined) || (this.addAMemberToProjectHook === false)){
        await DriverFactory.myDriver.get("https://www.pivotaltracker.com/projects/"+this.firstProjectId+"/memberships");
        const invitePeopleButton = await DriverFactory.myDriver.wait(until.elementLocated(MembersTab.invitePeopleButton));
        await invitePeopleButton.click();
        const findEmailTextField = await DriverFactory.myDriver.wait(until.elementLocated(MembersTab.findEmailTextField));
        await findEmailTextField.sendKeys(environment.prod.userMember01.username);
        const inviteMember = await DriverFactory.myDriver.wait(until.elementLocated(MembersTab.inviteMemberLabel));
        await inviteMember.click();
        const inviteButton = await DriverFactory.myDriver.wait(until.elementLocated(MembersTab.inviteButton));
        await inviteButton.click();
        await DriverFactory.myDriver.get("https://www.pivotaltracker.com/n/projects/"+this.firstProjectId+"");
        await DriverFactory.myDriver.wait(until.urlContains(this.firstProjectId));
    }
    this.addAMemberToProjectHook = true;
});

After({ tags: "@deleteFirstProject" }, async function(scenario){
    console.log("Starting to delete the first project");
    const driver = await DriverFactory.getDriverInstance();
    const tags = scenario.pickle.tags;
    if (!!tags.find(tag => { return tag.name === '@createFirstProject'; })) {
        await driver.get("https://www.pivotaltracker.com/projects/" + this.firstProjectId + "/settings");
        const deleteLink = await driver.wait(until.elementLocated(ProjectSettingsPage.deleteLink), configuration.browser.timeout);
        deleteLink.sendKeys(Key.SHIFT);
        await driver.wait(until.elementIsVisible(deleteLink), configuration.browser.timeout);
        await deleteLink.click();
        const deleteButton = await driver.wait(until.elementLocated(ProjectSettingsPage.deleteButton));
        await deleteButton.click();
    }
});

AfterAll({ tags: "@ui" }, async function(){
    await DriverFactory.closeDriver();
});
