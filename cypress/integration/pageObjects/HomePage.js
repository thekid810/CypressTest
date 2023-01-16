class HomePage
{
    getAddMemberTab()
    {
        return cy.get('[href="/add-member"]')
    }
    getSearchMemberTab()
    {
        return cy.get('[href="/search-member"]')
    }
    getViewMemberTab()
    {
        return cy.get('[href="/view-member"]')
    }
}
export default HomePage;