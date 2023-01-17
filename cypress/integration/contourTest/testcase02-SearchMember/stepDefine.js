import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjects/HomePage'
import SearchMemberPage from '../../pageObjects/SearchMemberPage'

const homePage = new HomePage()
const searchMemberPage = new SearchMemberPage()
var id=0

Given('I am at home page', function()
{
    cy.visit(Cypress.env('url'))
})
When('I click Search Member tab', function()
{
    homePage.getSearchMemberTab().click()
    cy.url().should('eq', 'http://localhost:8080/search-member')
})
When('I enter an existing name of member', function()
{
    //Enter name then click Search
    searchMemberPage.getTxtSearch().type(this.data.firstName[0])
    searchMemberPage.getBtnSearch().click()
})
Then('I can see member in the list', function()
{
    searchMemberPage.getTableOfMember().should('be.visible').contains('td', this.data.firstName[0])
})
When('I enter an non-existing name of member', function()
{
    //Enter name then click Search
    searchMemberPage.getTxtSearch().type(this.data.firstName[0] + this.data.firstName[1])
    searchMemberPage.getBtnSearch().click()
})
Then('The list is empty', function()
{
    searchMemberPage.getTableOfMember().should('be.visible').contains('td').should('not.exist')
})