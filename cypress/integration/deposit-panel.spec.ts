context('Deposit Panel', () => {
  it('can check Deposit panel', () => {
    cy.visit('http://localhost:3000/')
    cy.percySnapshot('Deposit panel')

    cy.get('[data-cy=deposit-value]')
      .should('exist')
      .should('contain', '$3,024.00')

    cy.get('[data-cy=deposit-value]').should(
      'have.css',
      'color',
      'rgba(0, 0, 0, 0.87)'
    )
  })
})
