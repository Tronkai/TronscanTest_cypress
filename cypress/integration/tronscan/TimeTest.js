const TEST_TIMES = 5;
let startTime;
let fpArr = [];
const url = 'https://tronscan.org/#/';
describe('test fp', () => {
    beforeEach(() => {
        startTime = +new Date();
    })

    afterEach(() => {
        cy.log(+new Date() - startTime);
    })

    for (let i = 0; i < TEST_TIMES; i++) {
        it((`加载页面`),() => {
            cy.visit(`${url}`);
        });
    }
})
