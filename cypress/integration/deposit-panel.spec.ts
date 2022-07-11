context('Deposit Panel', () => {
  it('can check Deposit panel', () => {
    cy.visit('http://localhost:3000/')
    cy.percySnapshot('Deposit panel', { port: 5555 })

    cy.get('[data-cy=deposit-value]')
      .should('exist')
      .should('contain', '-$37,249.01')

    cy.get('[data-cy=deposit-value]').should(
      'have.css',
      'color',
      'rgb(255, 0, 0)'
    )

    cy.get('[data-cy=view-balance-deposits-link]').should(
      'have.css',
      'display',
      'flex'
    )
    cy.get('[data-cy=view-balance-deposits-link]').should(
      'have.css',
      'justify-content',
      'flex-end'
    )
  })
})
