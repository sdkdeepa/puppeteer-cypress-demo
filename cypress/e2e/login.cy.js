describe('Login', () => {
  it('logs in successfully', () => {
    cy.visit('./src/index.html')

    cy.contains('a', 'Login').click()
    cy.puppeteer('switchTabAndLogin')
    cy.log('clicked login button')
    cy.contains('p', "You're now logged in!")
      .should('be.visible')
  })
})
