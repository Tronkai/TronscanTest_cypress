'https://tronscan.org/#/block/30118709/transfers'

describe('https://tronscan.org/#/block/30118709/transfers', () => {
    it('地址_分析', () => {
        var a =['https://tronscan.org/#/block/30118709/transfers']
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