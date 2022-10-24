describe('Alerts', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}javascript_alerts`);
    })
    it('JS alerts', function(){
        cy.contains('button', 'Click for JS Alert').click();
    })
})