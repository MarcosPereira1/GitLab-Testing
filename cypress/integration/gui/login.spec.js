// interface grafica usuário

/// <reference types="Cypress" />

describe( 'login', () => {
it('successfully', () => {
    cy.login()

    cy.get('.header-user-avatar').should('exist')
})
})