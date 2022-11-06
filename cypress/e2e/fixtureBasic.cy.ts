import { testData } from './models.d';

describe('Using a fixture', () => {
    it('Loading a file', () => {
        cy.fixture('example').then((dataTest: testData) => {
            cy.log(`The data ${dataTest}`)
        })
    });
});