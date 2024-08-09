const { By } = require("selenium-webdriver");

class MembersTab{
    invitePeopleButton = By.css('#invite-people-button');
    findEmailTextField = By.css('#invite-modal-search-bar');
    inviteMemberLabel = By.css('div:has(> div[title="{0}"]) ~ span');
    inviteButton = By.css('.Modal__footer .button.button--positive');
}

module.exports = new MembersTab();