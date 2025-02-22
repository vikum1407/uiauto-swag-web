/// <references types="Cypress" />
import Login from "../pageObjects/loginPage";
import Home from "../pageObjects/homePage";


describe('Login Page Automation', ()=>{
    const login = new Login();
    const home = new Home();

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it('logo validation', ()=>{
        login.logoVerify();
    })

    it('Login automation with correct credentials', ()=>{
        

        cy.fixture('swag').then((data) =>{
            login.setUsername(data.username);
            login.setPassword(data.password);
            login.clickLoginbtn();
            home.verifyCartIcon();
        })
    })
})