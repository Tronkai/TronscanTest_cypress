'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/votes'

describe('https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/votes', () => {
    it('地址_分析', () => {
        var a =['https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/votes']
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