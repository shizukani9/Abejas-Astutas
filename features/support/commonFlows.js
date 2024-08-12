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
var {setDefaultTimeout} = require('@cucumber/cucumber');
const StoryPanel = require("../../main/ui/story_panel");
const StoriesTab = require("../../main/ui/stories_tab");
const DashboardPage = require("../../main/ui/dashboard_page");

module.exports = class CommonFlows{

    static async login(scenario, isCookieEnabled) {
        console.log("Hook: Starting Login");
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
        return true;
    }

    static async createFirstProject() {
        console.log("Hook: Starting to create first project");
        await DriverFactory.myDriver.get("https://www.pivotaltracker.com/dashboard");

        const createProjectFromDashButton = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.createProjectButton));
        await createProjectFromDashButton.click();
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.projectNameInput));
        const selectorAccountDropdown = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.selectorAccountDropdown));
        this.firstProjectName = RandomValues.randomNumerics(6);
        await projectNameInput.sendKeys(this.firstProjectName);
        await selectorAccountDropdown.click();
        const optionOfDropdownSelector = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.optionOfDropdownSelector));
        await optionOfDropdownSelector.click();
        const createButton = await DriverFactory.myDriver.wait(until.elementLocated(DashboardPage.createButton));
        
        await createButton.click();
        await DriverFactory.myDriver.wait(until.urlContains("projects"));
        await DriverFactory.myDriver.sleep(1000);
        this.firstProjectId = (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
        return this.firstProjectId;
    }

    static async addAMemberToProject() {
        console.log("Hook: Starting to add a member to project");
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
        return true;
    }

    static async deleteFirstProject(firstProjectId) {
        console.log("Hook: Starting to delete the first project "+firstProjectId);
        if (firstProjectId !== undefined) {
            await DriverFactory.myDriver.get("https://www.pivotaltracker.com/projects/"+firstProjectId+"/settings");
            const deleteLink = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.deleteLink), configuration.browser.timeout);
            await deleteLink.sendKeys(Key.SHIFT);
            await DriverFactory.myDriver.wait(until.elementIsVisible(deleteLink), configuration.browser.timeout);
            await deleteLink.click();
            const deleteButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.deleteButton));
            await deleteButton.click();
            console.log("Project deleted");
            return undefined
    } else {
            console.log("No project to delete.");
        }
    }

    static async createStory(scenario) {
        console.log("Hook: Starting to create a feature story");
        const addStoryButton = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.addStoryButton));
        await DriverFactory.myDriver.wait(until.elementIsVisible(addStoryButton), configuration.browser.timeout);
        await addStoryButton.click();
        const storyTitleTextField = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.storyTitleTextField));
        const storyTypeDropdown = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.storyTypeDropdown));
        this.firstStoryFeatureName = RandomValues.randomNumerics(6);       
        await storyTitleTextField.sendKeys(this.firstStoryFeatureName);
        await storyTypeDropdown.click();
        const tags = scenario.pickle.tags; 
        StoryPanel.locatorAux.value = StoryPanel.storyOptionInDropdown.value.replace("{0}", ((!!tags.find(tag => { return tag.name === '@createBugStory'; }) ? "bug":"feature")));
        const optionSelectedInDropdown = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.locatorAux));
        await optionSelectedInDropdown.click();
        const saveButton = await DriverFactory.myDriver.wait(until.elementLocated(StoryPanel.saveButton));
        await saveButton.click();
        await DriverFactory.myDriver.wait(until.elementIsVisible(addStoryButton), configuration.browser.timeout);
        let storyItem = await DriverFactory.myDriver.wait(until.elementLocated(StoriesTab.previewStoryItemRow));
        storyItem = await DriverFactory.myDriver.wait(until.elementTextContains(storyItem, this.firstStoryFeatureName));
        await storyItem.click();
        return true;
    }

    static async createDefaultProject() {
        console.log("Hook: Starting to createcls the Default project");
        const projectNameInput = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.nameFirstProjectInput));
        const createProjectButton = await DriverFactory.myDriver.wait(until.elementLocated(IntroductionPage.createProjectButton));
        await projectNameInput.sendKeys("Default");
        await createProjectButton.click();
        await DriverFactory.myDriver.sleep(1000);
        await DriverFactory.myDriver.wait(until.urlContains("projects"));
        return (await DriverFactory.myDriver.getCurrentUrl()).split('/').pop();
    }
    
    static async deleteDefaultProject(defaultProjectId) {
        console.log("Hook: Starting to delete the Default project");
        await DriverFactory.myDriver.get("https://www.pivotaltracker.com/projects/"+defaultProjectId+"/settings");
        const deleteLink = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.deleteLink), configuration.browser.timeout);
        deleteLink.sendKeys(Key.SHIFT);
        await DriverFactory.myDriver.wait(until.elementIsVisible(deleteLink), configuration.browser.timeout);
        await deleteLink.click();
        const deleteButton = await DriverFactory.myDriver.wait(until.elementLocated(ProjectSettingsPage.deleteButton));
        await deleteButton.click();
    }
}
