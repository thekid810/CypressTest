class AddMemberPage
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
    getChkboxIagree()
    {
        return cy.get('#remember')
    }
    getBtnSubmit()
    {
        return cy.get('.text-white')
    }
    getToastMessage()
    {
        return cy.get('#toast-success')
    }
}
export default AddMemberPage;