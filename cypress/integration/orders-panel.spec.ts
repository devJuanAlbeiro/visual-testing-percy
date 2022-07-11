context('Orders Panel', () => {
  it('can check Orders panel', () => {
    cy.visit('http://localhost:3000/')
    cy.percySnapshot('Orders panel', { port: 5555 })

    cy.get('[data-cy=custom-title]')
      .should('exist')
      .should('contain', 'Recent Orders')

    cy.get('[data-cy=custom-title]').should(
      'have.css',
      'color',
      'rgb(25, 118, 210)'
    )
  })
})
