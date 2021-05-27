describe('mars', () => {
    it('mars', () => {
        var a =[]
        a.forEach(function(item) {
            cy.server()
            cy.route({
                method: 'GET',
                url: '**',
            }).as(item)

            cy.visit(item)
            a = '@' + item
            cy.wait(a).then((xhr) => {
                // cy.log( item);
                cy.log( xhr.url);
            });
            cy.wait(1000)


            // var i = 0
            // for (;i < 3;i++){
            //         cy.wait('@gets').then((xhr) => {
            //             cy.log( xhr.url);
            //             // cy.log(JSON.stringify(xhr.response.body));
            //         });
            //     }

        })
    })
})