describe('@cypress/puppeteer demo', () => {
  it('Goes from one tab to another then comes back for assertion', () => {
    cy.visit('https://dev.to/sdkdeepa')

    cy.contains('a', 'https://deepasubramanian.dev/').click()
    cy.log('Link clicked');
    cy.puppeteer('switchTabAndGetContent')
    .should('equal',"Tech Enthusiast")
    })
  })

