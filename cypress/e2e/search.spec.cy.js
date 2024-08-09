describe("All products ", () => {
    beforeEach(() => {
    cy.visit("https://silpo.ua");
    });

it("should find search field", () => {
    //cy.get('.header__search').click().type('хліб')
    cy.get(".header__search")
        .should("be.visible") 
        .click();
    });

it("should click to search field", () => {
    cy.get(".search-input__container") 
        .click() 
        .type("хліб"); 

});

});
