class Home
{
    constructor()
    {
        this.cartIcon = ".shopping_cart_link"
    }

    verifyCartIcon()
    {
        cy.get(this.cartIcon).should('be.visible');
    }
}

export default Home;