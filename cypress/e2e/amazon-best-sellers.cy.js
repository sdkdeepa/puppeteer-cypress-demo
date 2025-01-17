describe('Amazon Website Tests', () => {
    beforeEach(() => {
      // Visit Amazon.com and clear cookies
      cy.visit('https://www.amazon.com');
      cy.clearCookies();
      cy.getCookies().should('be.empty');
    })
    it('Nav bar is present',() => {
                cy.visit('https://www.amazon.com')
                cy.get('#nav-hamburger-menu').click()
                cy.get('#hmenu-content').should('be.visible');
    })
    it('Clicks on a product from Best Sellers', () => {
      // Verify that we are in the "Best Sellers in Toys & Games" section
            cy.get('h2')
                .should('contain.text', 'Best Sellers in Toys & Games');
            cy.wait(2000)
            cy.get('.feed-carousel-viewport')
              .find('ul')
              .first()
              .find('li')   
              .first()    
              .find('a')    
              .click();        
            // Assert that the URL matches the expected pattern
            // cy.url().should('match', /https:\/\/www.amazon.com\/Non-slip-Splash-Sprinkler-Toddlers-Outdoor\/dp\/B0899WTH85\/.*$/);
            cy.url().should('include', '/dp/');
            cy.get('#add-to-cart-button').click();
    });
});
