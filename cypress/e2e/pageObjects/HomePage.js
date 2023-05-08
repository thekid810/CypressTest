class HomePage
{
    getLogo()
    {
        return cy.get('a:contains("MarsAir")')
    }
    getDepartingCb()
    {
        return cy.get('#departing')
    }
    getReturningCb()
    {
        return cy.get('#returning')
    }
    getPromotionalCodeTxt()
    {
        return cy.get('#promotional_code')
    }
    getSearchBtn()
    {
        return cy.get('input[value="Search"]')
    }
    getSearchResults()
    {
        return cy.get('div[id="content"] > p')
    }
}
export default HomePage;