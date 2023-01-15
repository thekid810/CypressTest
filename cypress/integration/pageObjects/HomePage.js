class HomePage
{
    getSearchTextbox()
    {
        return cy.get('input[name="q"]')
    }
}
export default HomePage;