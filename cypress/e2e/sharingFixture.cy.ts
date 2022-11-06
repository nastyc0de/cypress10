import { testData } from "./models";

describe('Sharing my fixture', () => {
    beforeEach(function() {
        cy.fixture('example').as('datos')
    });
    it.only('Accesing the shared fixture01', function(){
        cy.get<testData>('@datos').then((test) => {
            cy.log('dasdas', test)
        })
    });
    it('Accesing the shared fixture01', function(){});
    it('Accesing the shared fixture01', function(){});
}); 