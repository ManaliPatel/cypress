
class Login {

    enterData(username, password){
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
    }

    signIn() { return cy.contains('Sign In'); }
}

module.exports = new Login()

