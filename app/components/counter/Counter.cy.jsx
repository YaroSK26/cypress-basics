import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />)
    cy.contains(/counter/i)
    cy.get('[data-id="count-number"]').should('have.text', '0')
    cy.get('[data-id="increment"]').click()
    cy.get('[data-id="count-number"]').should("have.text", "1");
    cy.get('[data-id="decrement"]').click();
    cy.get('[data-id="count-number"]').should("have.text", "0");

  })
})