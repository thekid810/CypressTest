beforeEach(() =>{
    cy.fixture('parameters').then(function(data)
        {
            this.data=data
        })
})