Cypress.config('defaultCommandTimeout', 16000);

describe('works with loading', () => {
    it('visit with delay', () => {
        cy.visit('/loaddelay', {timeout:0});
    })
    it.only('Client delay button', () => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').click();
        cy.get('.bg-success').should(
            'have.text',
            'Data calculated on the client side.'
        )
    })
    it.only('Progress bar', () => {
        cy.visit('/progressbar');
        cy.get('#startButton').click();
        cy.get('#progressBar', {timeout:30000}).should(
            'have.text',
            '100%'
        )
    })
})