'https://tronscan.org/#/contracts/contract-triggers'

describe('https://tronscan.org/#/contracts/contract-triggers', () => {
    it('地址_分析', () => {
        var a =['https://tronscan.org/#/contracts/contract-triggers']
        a.forEach(function(item) {
            cy.server()
            cy.route({
                method: 'GET',
                url: '**',
            }).as("route")

            cy.visit(item)
            cy.wait('@route').then((xhr) => {
                // cy.log( item);
                cy.log( xhr.url);
            });
            // cy.wait(1000)
        })
    })
})