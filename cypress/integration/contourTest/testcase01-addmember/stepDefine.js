import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjects/HomePage'
import AddMemberPage from '../../pageObjects/AddMemberPage'

const homePage = new HomePage()
const addMemberPage = new AddMemberPage()

Given('I am at home page', function()
{
    cy.visit(Cypress.env('url'))
})
When('I click Add Member tab', function()
{
    homePage.getAddMemberTab().click()
    cy.url().should('eq', 'http://localhost:8080/add-member')
})
When('I input all fields and click Submit', function()
{
    addMemberPage.getTxtFirstName().type(this.data.firstName[0])
    addMemberPage.getTxtLastName().type(this.data.lastName[0])
    addMemberPage.getTxtTitle().type(this.data.title[0])
    addMemberPage.getTxtCompany().type(this.data.company[0])
    addMemberPage.getTxtPhone().type(this.data.phone[0])
    addMemberPage.getTxtWebsite().type(this.data.website[0])
    addMemberPage.getTxtEmail().type(this.data.email[0])
    addMemberPage.getChkboxIagree().check()
    addMemberPage.getBtnSubmit().click()
})
Then('I add member sucessful', function()
{
    addMemberPage.getToastMessage().should((toastrmsg) => {
        expect(toastrmsg, "The sucessful toast message should be displayed").be.visible;
    })
})
When('I input all fields but the phone number is wrong format and click Submit', function()
{
    addMemberPage.getTxtFirstName().type(this.data.firstName[1])
    addMemberPage.getTxtLastName().type(this.data.lastName[1])
    addMemberPage.getTxtTitle().type(this.data.title[1])
    addMemberPage.getTxtCompany().type(this.data.company[1])
    addMemberPage.getTxtPhone().type(this.data.phone[1])
    addMemberPage.getTxtWebsite().type(this.data.website[1])
    addMemberPage.getTxtEmail().type(this.data.email[1])
    addMemberPage.getChkboxIagree().check()
    addMemberPage.getBtnSubmit().click()
})
Then('I can not add member', function()
{
    addMemberPage.getToastMessage().should((toastrmsg) => {
        expect(toastrmsg, "The sucessful toast message should not be displayed").not.be.visible;
    })
})