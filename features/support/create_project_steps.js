const { Given, When, Then } = require('@cucumber/cucumber');
const DriverFactory = require('../../core/ui/driverFactory');
const CreateProjectPage = require('../../main/ui/create_project_page');
const LoginPage = require('../../main/ui/login_page');
const DashboardPage = require('../../main/ui/dashboard_page');
let chai = require('chai');
let expect = chai.expect;

Given('The user has logged in to Pivotal Tracker', async function () {

});

When('The user creates a new project named:', async function (dataTable) {
 
});

Then('The new project should be listed on the project dashboard', async function () {
  
});