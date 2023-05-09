import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjects/HomePage'

const homePage = new HomePage()

var id=0

Given('As a MarsAir Sales Director - Mark, I am at home page', function()
{
    cy.visit(Cypress.env('url'))
    cy.screenshot()
})
When('I select a departing time and a returning time that is less than 1 year from the departure, then I click the Search button', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[0])
    homePage.getReturningCb().select(this.data.returningTime[0])
    homePage.getSearchBtn().click()
})
When('I select a departing time and a returning time that is greater than 1 year from the departure, then I click the Search button', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[1])
    homePage.getReturningCb().select(this.data.returningTime[1])
    homePage.getSearchBtn().click()
})
When('I select a departing time and a returning time that is equal 1 year from the departure, then I click the Search button', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[2])
    homePage.getReturningCb().select(this.data.returningTime[2])
    homePage.getSearchBtn().click()
})
When('I select a departing time and a returning time that is greater than 1 year from the departure, and I input a valid promotional code, then I click the Search button', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[1])
    homePage.getReturningCb().select(this.data.returningTime[1])
    homePage.getPromotionalCodeTxt().type(this.data.promotionalCode[0])
    homePage.getSearchBtn().click()
})
When('I select a departing time and a returning time that is greater than 1 year from the departure, and I input a invalid promotional code, then I click the Search button', function()
{
    homePage.getDepartingCb().select(this.data.departingTime[1])
    homePage.getReturningCb().select(this.data.returningTime[1])
    homePage.getPromotionalCodeTxt().type(this.data.promotionalCode[1])
    homePage.getSearchBtn().click()
})
Then('I click Back button and I am at home page', function()
{
    homePage.getSearchResults().last().contains("Back").click()
    homePage.getDepartingCb().should('be.visible')
    homePage.getReturningCb().should('be.visible')
    homePage.getPromotionalCodeTxt().should('be.visible')
    homePage.getSearchBtn().should('be.visible')
})
Then('I should see a message that says: Unfortunately, this schedule is not possible. Please try again', function()
{
    homePage.getSearchResults().first().should('have.text', this.data.messageContent[0])
})
Then('I should see a message that says: Seats available! Call now on 0800 MARSAIR to book!', function()
{
    homePage.getSearchResults().first().should('have.text', this.data.messageContent[1].split('!')[0] + "!")
    homePage.getSearchResults().eq(1).should('have.text', this.data.messageContent[1].split('!')[1]  + "!")
})
Then('I should see a message that says: Sorry, there are no more seats available', function()
{
    homePage.getSearchResults().first().should('have.text', this.data.messageContent[2])
})
Then('I should see a message that says: Promotional code XX9-XXX-999 used: xx% discount!', function()
{
    homePage.getSearchResults().eq(1).should('have.text', "Promotional code " + this.data.promotionalCode[0] +  " used: " + this.data.promotionalCode[0].substring(2,3) + "0% discount!")
})
Then('I should see a message that says: Sorry, code XX9-XXX-999 is not valid.', function()
{
    homePage.getSearchResults().eq(1).should('have.text', "Sorry, code " + this.data.promotionalCode[1] +  " is not valid")
})
