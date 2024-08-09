describe("All products ", () => {
    beforeEach(() => {
    cy.visit("https://silpo.ua");
    });

it("should find search field", () => {
    cy.get(".header__search")
        .should("be.visible") 
        .click();

    cy.get(".ng-pristine") 
        // .should("be.visible")
        // .wait(500)
        .click()
        .type("хліб");
        
    });

})