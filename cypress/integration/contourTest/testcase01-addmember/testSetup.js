beforeEach(() =>{
    cy.fixture('TestData').then(function(data)
        {
            this.data=data                     
        })
})