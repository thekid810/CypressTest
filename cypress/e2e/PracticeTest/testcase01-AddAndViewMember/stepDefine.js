import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjects/HomePage'

const homePage = new HomePage()

var id=0

Given('As a MarsAir Sales Director - Mark, I am at home page.', function()
{
    cy.visit(Cypress.env('url'))
    cy.screenshot()
})
When('I select departing time then select returning time that less than departing time.', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[0])
    homePage.getReturningCb().select(this.data.returningTime[0])
})
When('I select departing time then select returning time that greater than departing time.', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[1])
    homePage.getReturningCb().select(this.data.returningTime[1])
})
When('I click Search button.', function()
{
    homePage.getSearchBtn().click()
})
Then('I should see the message like: Unfortunately, this schedule is not possible. Please try again.', function()
{
    homePage.getSearchResults().first().should('have.text', this.data.messageContent[0])
})
Then('I should see the message like: Seat available!Call now on 0800 MARSAIR to book!.', function()
{
    homePage.getSearchResults().first().should('have.text', this.data.messageContent[1])
})
