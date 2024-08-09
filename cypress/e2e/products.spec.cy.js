describe('All products ', () => {

    beforeEach(() => {
        cy.visit('https://silpo.ua')
    })
    
    it('should click to "all products" button', () => {
        cy.get('.header__catalog-btn').click()
        
    })
    
    it('should click to "bread"', () => {
        cy.get('.menu-categories__link').eq(1).click()
    })

})