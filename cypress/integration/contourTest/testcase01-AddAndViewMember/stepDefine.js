import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjects/HomePage'
import AddMemberPage from '../../pageObjects/AddMemberPage'
import ViewMemberPage from '../../pageObjects/ViewMemberPage'

const homePage = new HomePage()
const addMemberPage = new AddMemberPage()
const viewMemberPage = new ViewMemberPage()
var id=0

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
Then('I add member successful', function()
{
    addMemberPage.getToastMessage().should((toastrmsg) => {
        expect(toastrmsg, "The successful toast message should be displayed").be.visible;
    })
    addMemberPage.getToastMessage().invoke('text').then((text) => {
        id = text.split(':')[1].split('C')[0]
        cy.log(id)
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
        expect(toastrmsg, "The successful toast message should not be displayed").not.be.visible;
    })
})

When('I click View Member tab', function()
{
    homePage.getViewMemberTab().click()
    cy.url().should('eq', 'http://localhost:8080/view-member')
})
When('I enter ID then click Search button', function()
{
    //Enter ID then click Search
    viewMemberPage.getTxtSearch().type(id)
    viewMemberPage.getBtnSearch().click()
})
Then('I see all informations of member', function()
{
    //Verify information
    viewMemberPage.getTxtFirstName().should('have.text', this.data.firstName[0])
    viewMemberPage.getTxtLastName().should('have.text',this.data.lastName[0])
    viewMemberPage.getTxtTitle().should('have.text',this.data.title[0])
    viewMemberPage.getTxtCompany().should('have.text',this.data.company[0])
    viewMemberPage.getTxtPhone().should('have.text',this.data.phone[0])
    viewMemberPage.getTxtWebsite().should('have.text',this.data.website[0])
    viewMemberPage.getTxtEmail().should('have.text',this.data.email[0])
})