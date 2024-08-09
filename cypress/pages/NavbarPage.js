export class NavbarPage {

    elements = {
        getLogo: () => cy.get('.header__logo'),
        getCatalogButton: () => cy.get('.header__catalog-btn'),
        getSearchButton: () => cy.get('.header__search'),
        getDeliveryAddress: () => cy.get('.header__delivery'),
        getProfileButton: () => cy.get('.header__profile')
    };
    
    
    
    assertLogoVisible() {
        this.elements.getLogo()
        .should('be.visible');
    }
    
    assertCatalogButtonVisible() {
        this.elements.getCatalogButton()
        .should('be.visible');
    }
    
    assertSearchButtonVisible() {
        this.elements.getSearchButton()
        .should('be.visible');
    }
    
    assertDeliveryAddressVisible() {
        this.elements.getDeliveryAddress()
        .should('be.visible');
    }
    
    assertProfileButtonVisible() {
        this.elements.getProfileButton()
        .should('be.visible');
    }
}

export const NewNavbarPage = new NavbarPage();

