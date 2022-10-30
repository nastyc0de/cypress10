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
    it('JS confirm', function(){
        cy.contains('button', 'Click for JS Alert').click();
        cy.on('window:confirm', message => {
            expect(message).to.equal('I am a JS Alert')
        });
        cy.on('window:confirm', () => true);
        cy.get('p#result').should('have.text', 'You successfully clicked an alert')
    })
    it.only('JS Prompt', function(){
        cy.window().then(window => {
            cy.stub(window, 'prompt').returns('This is a hello world from the prompt alert')
            cy.contains('button', 'Click for JS Prompt').click()
        })
        cy.get('#result').should(
            'have.text',
            'You entered: This is a hello world from the prompt alert'
        )
        
    })
})