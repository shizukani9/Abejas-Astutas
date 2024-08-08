const { By } = require('selenium-webdriver');

class ProjectSettingsPage {
    get projectTitleInput() {
        return By.id('project_name');
    }

    get projectDescriptionInput() {
        return By.id('project_description');
    }

    get iterationStartSelect() {
        return By.id('project_week_start_day');
    }

    get projectStartDateInput() {
        return By.id('project_start_date');
    }

    get timeZoneSelect() {
        return By.id('project_time_zone');
    }

    get pointScaleSelect() {
        return By.id('project_point_scale_select');
    }

    get saveButton() {
        return By.css('input.save_bar__submit');
    }

    get saveSuccessMessage() {
        return By.css('.save_success_bar');
    }
}

module.exports = new ProjectSettingsPage();
