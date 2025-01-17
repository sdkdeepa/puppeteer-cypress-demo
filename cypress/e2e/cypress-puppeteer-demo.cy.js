describe('@cypress/puppeteer demo', () => {
  it('Goes from one tab to another then comes back for assertion', () => {
    cy.visit('https://dev.to/sdkdeepa')
    cy.log('Link 1 clicked');
    cy.get('[href="https://deepasubramanian.dev/"] > span').click();
    cy.log('Link 2 clicked');
    
    cy.puppeteer('switchTabAndGetContent')
      .should('equal',"Tech Enthusiast")
    })
  })

