'https://tronscan.org/#/contracts/verify'

describe('https://tronscan.org/#/contracts/verify', () => {
    it('地址_分析', () => {
        var a =['https://tronscan.org/#/contracts/verify']
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