class SearchMemberPage
{
    getTxtSearch()
    {
        return cy.get('#default-search')
    }
    getBtnSearch()
    {
        return cy.get('.text-white')
    }
    getTableOfMember()
    {
        return cy.get('.overflow-x-auto > .w-full')
    }
}
export default SearchMemberPage;