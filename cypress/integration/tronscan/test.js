describe('mars', () => {
    it('mars', () => {
        var a =[]
        a.forEach(function(item) {
            cy.log(item)
            cy.visit('https://www.projectmars.finance/')
            cy.get('#root > div.header > div > div.navi-buttons-wrapper > a:nth-child(2) > span.MuiButton-label').click()
            cy.get('#root > div.airdrop > div > div > div.address-check-wrapper > div > div').type(item)
            cy.get('#root > div.airdrop > div > div > div.address-check-wrapper > button > span.MuiButton-label').click()
            cy.wait(2500)

        })
    })
})