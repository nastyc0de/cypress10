describe('Alerts', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}javascript_alerts`);
    })
    it('JS alerts', function(){
        cy.contains('button', 'Click for JS Alert').click();
        cy.on('window:alert', message => {
            expect(message).to.equal('I am a JS Alert')
        });
        cy.on('window:confirm', () => true);
        cy.get('p#result').should('have.text', 'You successfully clicked an alert')
    })
})