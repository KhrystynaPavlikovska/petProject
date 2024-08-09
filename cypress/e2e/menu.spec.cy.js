// describe('Navbar Test', () => {
// it('should find phone number', () => {
//     cy.visit('https://www.atbmarket.com/')
//     cy.get('top-header__phone').should('be.visible')
// })
// })


describe('Navbar and Menu Tests', () => {

beforeEach(() => {
    //cy.visit('/') // https://example.com/')
    cy.visit('https://www.atbmarket.com/', {
        failOnStatusCode: false,
})
})

it.only('should find the phone number', () => {
    cy.get('.top-header__phone').should('be.visible'),
    cy.wait(10000)
})

it('should find the phone the "Sales" in navbar', () => {
    cy.get('.sticky-header__category-icon sticky-header__category-icon--actions').should('be.visible')
})

it('should find menu item "For Partners"', () => {
    cy.get('li.sticky-header__category-item').eq(1).should('be.visible')
})

it('should find menu item "ATB card"', () => {
    cy.get('li.sticky-header__category-item').eq(2).should('be.visible')
})

it('should find menu item "Own brands"', () => {
    cy.get('li.sticky-header__category-item').eq(3).should('be.visible')
})

it('should find menu item "Career"', () => {
    cy.get('li.sticky-header__category-item').eq(4).should('be.visible')
})

it('should find menu item "Newspaper"', () => {
    cy.get('li.sticky-header__category-item').eq(5).should('be.visible')
})

it('should find menu item "Order"', () => {
    cy.get('li.sticky-header__category-item').eq(5).should('be.visible')
})

it('should find menu item "Map"', () => {
    cy.get('li.sticky-header__category-item').eq(6).should('be.visible')
})
})


 //$('li.some-class').eq(1)



