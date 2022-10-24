describe('Demo qa', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}checkbox`);
    });
    it.skip('Checkbox scenario', () => {
        cy.get('input[type="checkbox"]').click({force:true});
        cy.get('#result').should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    });
})

describe("The internet app", () =>{
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}checkboxes`)
    })
    it('Checkbox scenario', () => {
        cy.get('form#checkboxes input').eq(0).click().should('be.checked')
        for (let index = 0; index < 2; index++) {
            cy.get('form#checkboxes input').eq(index).click().should('not.be.checked')
        }
    });
})