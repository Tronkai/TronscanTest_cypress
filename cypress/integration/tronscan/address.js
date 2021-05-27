'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR'

describe('https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR', () => {
    it('地址', () => {
        var a =['https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR']
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