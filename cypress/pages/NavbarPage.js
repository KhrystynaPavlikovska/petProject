class NavbarPage {
    // Selectors
    get logo() { return cy.get('.header__logo'); }
    get catalogButton() { return cy.get('.header__catalog-btn'); }
    get searchButton() { return cy.get('.header__search'); }
    get deliveryAddress() { return cy.get('.header__delivery'); }
    get profileButton() { return cy.get('.header__profile'); }

    // Methods for assertions
    assertLogoVisible() {
        this.logo.should('be.visible');
    }

    assertCatalogButtonVisible() {
        this.catalogButton.should('be.visible');
    }

    assertSearchButtonVisible() {
        this.searchButton.should('be.visible');
    }

    assertDeliveryAddressVisible() {
        this.deliveryAddress.should('be.visible');
    }

    assertProfileButtonVisible() {
        this.profileButton.should('be.visible');
    }
}

export default new NavbarPage();
