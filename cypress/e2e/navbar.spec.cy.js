import NavbarPage from '../pages/NavbarPage';

describe('Navbar and Menu Tests', () => {

    beforeEach(() => {
        cy.visit('https://silpo.ua');
    });

    it('should find logo', () => {
        NavbarPage.assertLogoVisible();
    });

    it('should find "all products" button', () => {
        NavbarPage.assertCatalogButtonVisible();
    });

    it('should find search button', () => {
        NavbarPage.assertSearchButtonVisible();
    });

    it('should find delivery address', () => {
        NavbarPage.assertDeliveryAddressVisible();
    });

    it('should find profile button', () => {
        NavbarPage.assertProfileButtonVisible();
    });

});


// describe('Navbar and Menu Tests', () => {

//     beforeEach(() => {
//         cy.visit('https://silpo.ua');
//     });

//     it('should find all essential navbar elements', () => {
//         NavbarPage.assertLogoVisible();

//         NavbarPage.assertCatalogButtonVisible();

//         NavbarPage.assertSearchButtonVisible();

//         NavbarPage.assertDeliveryAddressVisible();

//         NavbarPage.assertProfileButtonVisible();
//     });

// });
