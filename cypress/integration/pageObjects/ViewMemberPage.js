class ViewMemberPage
{
    getTxtFirstName()
    {
        return cy.get('#first_name')
    }
    getTxtLastName()
    {
        return cy.get('#last_name')
    }
    getTxtTitle()
    {
        return cy.get('#title')
    }
    getTxtCompany()
    {
        return cy.get('#company')
    }
    getTxtPhone()
    {
        return cy.get('#phone')
    }
    getTxtWebsite()
    {
        return cy.get('#website')
    }
    getTxtEmail()
    {
        return cy.get('#email')
    }
    getTxtSearch()
    {
        return cy.get('#default-search')
    }
    getBtnSearch()
    {
        return cy.get('.text-white')
    }
}
export default ViewMemberPage;