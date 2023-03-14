// example application: https://github.com/cypress-io/cypress-realworld-app
/*
cy.intercept("localhost:3000/*") matches all requests going to localhost:3000
cy.intercept("/users") matches GET /users and POST /users as wells
cy.intercept('** /users') matches all endpoints with users

cy.wait('@someRoute').its('request.body').should('include', 'user')
cy.wait('@someRoute').its('response.statusCode').should('eq', 500)
cy.wait('@someRoute').its('response.body').should('include', 'id')
cy.wait('@getSearch').its('request.url').should('include', '/search?query=Book')

cy.wait('@someRoute').then((interception) => {
  // 'interception' is an object with properties
  // 'id', 'request' and 'response'
})

cy.intercept('POST', '/organization', (req) => {
  expect(req.body).to.include('Acme Company')
})

cy.fixture('myfixture.json', { encoding: null }).as('myfixture')
*/

const page = require('../pages/page');

describe('logs in', () => {

    beforeEach( () => {
      cy.visit('/');
    });
  
    it('intercept one way', () => {
      cy.intercept('POST',"http://localhost:3001/login", {fixture: 'login.json'}).as('loginforUser');
      //  cy.visit("http://localhost:3000")
       page.login.enterData('test1111', 'Autodesk1234');
       page.login.signIn().click();
       cy.wait('@loginforUser').its('response.statusCode').should('eq', 200);
       cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text','Get Started with Real World App');
    })

    it('intercept another way', () => {
        cy.intercept('POST',"http://localhost:3001/login", { statusCode: 200}).as('loginforUser');
  
        //  cy.visit("http://localhost:3000")
         cy.get('input[name="username"]').type('test111');
         cy.get('input[name="password"]').type('Autodesk1234');
         cy.contains('Sign In').click();
         cy.wait('@loginforUser')
         cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text','Get Started with Real World App');
      })

    it('go through get started with Real World app', () => {
      cy.intercept('POST',"**/login", {fixture: 'login.json'}).as('loginforUser');

      // cy.visit("http://localhost:3000")
      page.login.enterData('test1111', 'Autodesk1234');
      page.login.signIn().click();
      cy.get('button[type="button"]').contains("Next").click()
      cy.contains("Create Bank Account");
      cy.get('input[placeholder="Bank Name"]').type("Cambridge Savings bank");
      cy.get('input[placeholder="Routing Number"]').type("he2sfa112");  
      cy.get('input[placeholder="Account Number"]').type("234243222");
      cy.contains("Save").click();
      cy.contains("Finished");
      cy.contains("Done").click();
    })

    it('user sign up', () => {
      cy.intercept('POST', '**/users', {statusCode: 201}).as('signUpRequestOne');

      cy.get('a[data-test="signup"]').click();
      cy.get('[data-test="signup-first-name"]').type("Manali");
      cy.get('[data-test="signup-last-name"]').type("Patel");
      cy.get('[data-test="signup-username"]').type("mpatel");
      cy.get('[data-test="signup-password"]').type("Autodesk");
      cy.get('[data-test="signup-confirmPassword"]').type("Autodesk");
      cy.get('[data-test="signup-submit"]').contains("Sign Up").click();
      cy.wait('@signUpRequestOne').its('response.statusCode').should('eq', 201);
    
      page.login.enterData('mpatel', 'Autodesk');
      page.login.signIn().click();
      cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text','Get Started with Real World App');
    })
})