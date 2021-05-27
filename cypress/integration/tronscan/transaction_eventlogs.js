'https://tronscan.org/#/transaction/' +
'a86ca957dd2d5391b4f551fc04d8a61bad1f2d34e1020038a0933ee3aee22c9b/event-logs'

describe('', () => {
    it('地址_分析', () => {
        var a =['']
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