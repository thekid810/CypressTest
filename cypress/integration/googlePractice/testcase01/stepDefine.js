import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjects/HomePage'
const homePage = new HomePage()
Given('I am at google home page', function()
{
    //Navigate google page
    cy.visit(Cypress.env('url'))
})
When ('I enter keyword and press enter', function()
{
    //Input keyword search then pressing enter
    const homePage = new HomePage()
    homePage.getSearchTextbox().type(this.data.keyword)
    homePage.getSearchTextbox().type('{enter}')
})
Then ('The result will show', function()
{
    // Confirm the google is showing the result
    cy.get('div[id="result-stats"]').should('be.visible')
})