
describe('页面接口测试', () => {
    it('地址_分析', () => {
        var a =['https://tronscan.org/#/',
            'https://tronscan.org/#/searchmore',
            'https://tronscan.org/#/searchResult/btt?type=tokens&address',
            'https://tronscan.org/#/blockchain/nodes',
            'https://tronscan.org/#/blockchain/blocks',
            'https://tronscan.org/#/block/30118662',
            'https://tronscan.org/#/block/30118709/transfers',
            'https://tronscan.org/#/blockchain/transactions',
            'https://tronscan.org/#/transaction/a86ca957dd2d5391b4f551fc04d8a61bad1f2d34e1020038a0933ee3aee22c9b',
            'https://tronscan.org/#/transaction/a86ca957dd2d5391b4f551fc04d8a61bad1f2d34e1020038a0933ee3aee22c9b/event-logs',
            'https://tronscan.org/#/blockchain/transfers',
            'https://tronscan.org/#/blockchain/accounts',
            'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR',
            'https://tronscan.org/#/contract/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR/code',
            'https://tronscan.org/#/address/TFA1qpUkQ1yBDw4pgZKx25wEZAqkjGoZo1',
            'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/transactions',
            'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/transfers',
            'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/votes',
            'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/internal-transactions',
            'https://tronscan.org/#/address/TA9FnQrLGdgLW6cwBKue9DyqSBz1UNzUMR/freeze',
            'https://tronscan.org/#/address/TH746WKMRfNbe8CzYxRpkXwKr7fjocYFTN/analysis',
            'https://tronscan.org/#/contract/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR/analysis',
            'https://tronscan.org/#/contract/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR/events',
            'https://tronscan.org/#/contract/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR/energy',
            'https://tronscan.org/#/address/TFA1qpUkQ1yBDw4pgZKx25wEZAqkjGoZo1/blocks',
            'https://tronscan.org/#/address/TFA1qpUkQ1yBDw4pgZKx25wEZAqkjGoZo1/voters',
            'https://tronscan.org/#/contract/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/code',
            'https://tronscan.org/#/contracts/contracts',
            'https://tronscan.org/#/contracts/contract-triggers',
            'https://tronscan.org/#/contracts/contract-compiler',
            'https://tronscan.org/#/contracts/verify',
            'https://tronscan.org/#/tokens/list',
            'https://tronscan.org/#/token/1002000/transfers',
            'https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
            'https://tronscan.org/#/token/1002000/holders',
            'https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/holders',
            'https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/code',
            'https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/analysis',
            'https://tronscan.org/#/token721/TLwu6VYaVBc5fsaTCWRHSdk71DNrZ6Vsj6',
            'https://tronscan.org/#/token721/TLwu6VYaVBc5fsaTCWRHSdk71DNrZ6Vsj6/holders',
            'https://tronscan.org/#/token721/TLwu6VYaVBc5fsaTCWRHSdk71DNrZ6Vsj6/inventory',
            'https://tronscan.org/#/tokens/create/Type',
            'https://tronscan.org/#/data/stats',
            'https://tronscan.org/#/data/stats/totalTxns',
            'https://tronscan.org/#/data/stats/usdt',
            'https://tronscan.org/#/data/stats/usdj',
            'https://tronscan.org/#/data/stats/priceStats',
            'https://tronscan.org/#/data/stats/supply',
            'https://tronscan.org/#/data/charts/OverallFreezingRate',
            'https://tronscan.org/#/data/charts/supply',
            'https://tronscan.org/#/data/stats/hotToken',
            'https://tronscan.org/#/data/stats/addressesStats',
            'https://tronscan.org/#/data/charts/HoldTrxAccount',
            'https://tronscan.org/#/data/stats/activeAccounts',
            'https://tronscan.org/#/data/stats/blockSizeStats',
            'https://tronscan.org/#/data/stats/blockchainSizeStats',
            'https://tronscan.org/#/data/stats/EnergyConsumeDistribution',
            'https://tronscan.org/#/data/stats/ContractInvocation',
            'https://tronscan.org/#/data/stats/ContractInvocationDistribution',
            'https://tronscan.org/#/data/stats/srBlock',
            'https://tronscan.org/#/data/stats/srVote',
            'https://tronscan.org/#/data/stats/EnergyConsume',
            'https://tronscan.org/#/data/bestdata',
            'https://tronscan.org/#/sr/representatives',
            'https://tronscan.org/#/sr/votes',
            'https://tronscan.org/#/sr/committee',
            'https://tronscan.org/#/proposals']
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
            // cy.wait(1000)
        })
    })
})