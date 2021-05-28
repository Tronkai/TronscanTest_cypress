'https://tronscan.org/#/token721/TLwu6VYaVBc5fsaTCWRHSdk71DNrZ6Vsj6/holders'

describe('https://tronscan.org/#/token721/TLwu6VYaVBc5fsaTCWRHSdk71DNrZ6Vsj6/holders', () => {
    it('地址_分析', () => {
        var a =['https://tronscan.org/#/token721/TLwu6VYaVBc5fsaTCWRHSdk71DNrZ6Vsj6/holders']
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