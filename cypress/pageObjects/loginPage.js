/// <references types="Cypress" />
class Login
{

    constructor()
    {
        this.logo = ".login_logo"
        this.username = "[data-test='username']"
        this.password = "[data-test='password']"
        this.loginbtn = "#login-button"
    }

    logoVerify(){
        cy.get(this.logo).should('be.visible');
    }        

    setUsername(username){
        cy.get(this.username).type(username);
    }

    setPassword(password){
        cy.get(this.password).type(password);
    }

    clickLoginbtn(){
        cy.get(this.loginbtn).click();
    }
}

export default Login;