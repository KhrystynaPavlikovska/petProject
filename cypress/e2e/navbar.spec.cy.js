import { NavbarPage } from '../pages/NavbarPage';

describe('Navbar and Menu Tests', () => {
    let navbarPage;
    
    beforeEach(() => {
        cy.visit('https://silpo.ua');
        navbarPage = new NavbarPage(); 
    });
    
    it('should find all essential navbar elements', () => {
        navbarPage.assertLogoVisible();
        navbarPage.assertCatalogButtonVisible();
        navbarPage.assertSearchButtonVisible();
        navbarPage.assertDeliveryAddressVisible();
        navbarPage.assertProfileButtonVisible();
    });
});


// describe('Navbar and Menu Tests', () => {
//     let navbarPage;

//     beforeEach(() => {
//         cy.visit('https://silpo.ua');
//         navbarPage = new NavbarPage(); 
//     });

//     it('should find logo', () => {
//         navbarPage.assertLogoVisible();
//     });

//     it('should find "all products" button', () => {
//         navbarPage.assertCatalogButtonVisible();
//     });

//     it('should find search button', () => {
//         navbarPage.assertSearchButtonVisible();
//     });

//     it('should find delivery address', () => {
//         navbarPage.assertDeliveryAddressVisible();
//     });

//     it('should find profile button', () => {
//         navbarPage.assertProfileButtonVisible();
//     });
// });

