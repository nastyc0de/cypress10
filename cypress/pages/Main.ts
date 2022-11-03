export class Main {
    private header: '.main-header';

    get headerElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.header)
    }
}