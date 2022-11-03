import { Main } from "./Main";

class Login extends Main {
    private username:string = '#userName';
    private password:string = '#password';
    private login:string = '#login';
    private message:string = '#name';

    get usernameElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.username);
    }
    get passwordElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.password);
    }
    get loginElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.login);
    }
    get messageElement(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.message);
    }

    submitLogin(usr:string, pass:string):void{
        cy.get(this.username).type(usr);
        cy.get(this.password).type(pass);
        cy.get(this.login).click();
    }
}
export const LoginPage = new Login();