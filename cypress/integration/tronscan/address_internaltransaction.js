'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/internal-transactions'

describe('https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/internal-transactions', () => {
    it('', () => {
        var a =['https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/internal-transactions']
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