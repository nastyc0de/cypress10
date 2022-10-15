describe('basics', () => {
    beforeEach(() => {
        cy.visit('/textinput')
    });
    it('visit explanation', () => {
        cy.log('hello from it')
    })
    it('subject management', () => {
        cy.url().then((url) =>{
            cy.log(`Printing ${url}`)
            expect(url).to.contains('test')
        })
    })
    it('TITLE validation', () =>{
        cy.title().then(title => {
            cy.log(title)
            expect(title).to.be.equal('Text Input')
        })
    })
    it('Challenge 1', () => {
        cy.get('#newButtonName').type('Escribe algo')
        cy.get('#updatingButton').click().should('have.text','Escribe algo')
    })
});