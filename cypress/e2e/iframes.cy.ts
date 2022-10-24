describe.skip('Iframes example', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}nestedframes`);
    });
    it('Simple and nested frames', () => {
        cy.get('#frame1').then(function($iframe){
            const $body = $iframe.contents().find('body');
            cy.wrap($body).should('have.text', 'Parent frame');
            cy.wrap($body)
                .find('iframe')
                .then(function($childIframe){
                    const $childBody = $childIframe.contents().find('body');
                    cy.wrap($childBody).find('p').should('have.text', 'Child Iframe')
                })
        })
    });
})

describe('Typing on an iframe', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}frame`);
    });
    it('Iframedemo', () => {
        cy.get('#mce_0_ifr').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').type('{selectAll}{del}Hello World')
            
        })
    });
    it('Iframedemo', () => {
        cy.get('#mce_0_ifr').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').should('have.text', 'Hello World')
        })
    });
})