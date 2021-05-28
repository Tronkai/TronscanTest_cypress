'https://tronscan.org/#/address/TFA1qpUkQ1yBDw4pgZKx25wEZAqkjGoZo1/blocks'

describe('https://tronscan.org/#/address/TFA1qpUkQ1yBDw4pgZKx25wEZAqkjGoZo1/blocks', () => {
    it('地址_区块', () => {
        var a =['https://tronscan.org/#/address/TFA1qpUkQ1yBDw4pgZKx25wEZAqkjGoZo1/blocks']
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