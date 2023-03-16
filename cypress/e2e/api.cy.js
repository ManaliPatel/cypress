
const page = require('../pages/page');

describe('api test', () => {
    beforeEach(() => {
        cy.visit('/');
        // cy.get('a[data-test="signup"]').click();
        // cy.get('[data-test="signup-first-name"]').type("Manali");
        // cy.get('[data-test="signup-last-name"]').type("Patel");
        // cy.get('[data-test="signup-username"]').type("mpatel");
        // cy.get('[data-test="signup-password"]').type("Autodesk");
        // cy.get('[data-test="signup-confirmPassword"]').type("Autodesk");
        // cy.get('[data-test="signup-submit"]').contains("Sign Up").click();

        page.login.enterData('mpatel', 'Autodesk');
        page.login.signIn().click();
        // cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text','Get Started with Real World App');
        // cy.get('button[type="button"]').contains("Next").click()
        // cy.contains("Create Bank Account");
        // cy.get('input[placeholder="Bank Name"]').type("Cambridge Savings bank");
        // cy.get('input[placeholder="Routing Number"]').type("he2sfa112");  
        // cy.get('input[placeholder="Account Number"]').type("234243222");
        // cy.contains("Save").click();
        // cy.contains("Finished");
        // cy.contains("Done").click()
    })
    it('call login page', () => {
        cy.log('api')
        cy.request('GET', 'http://localhost:3001/transactions/public').then((response) => {
            expect(response.statusCode).to.eq(200);
        })
    })
})