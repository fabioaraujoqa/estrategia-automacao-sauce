/// <reference types="cypress" />

describe('Testes de ponta a ponta no ecommerce Saucelabs ', () => {
  
    it('Deve validar fluxo de ponta a ponta', () => {
    cy.visit('https://www.saucedemo.com/')
    
    //Login
      cy.login('standard_user', 'secret_sauce')

    //Escolha do produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('contain', 'Your Cart')

    cy.get('[data-test="checkout"]').click()

    //Formulario Checkout
    cy.get('[data-test="firstName"]').type('Fábio')
    cy.get('[data-test="lastName"]').type('Araujo')
    cy.get('[data-test="postalCode"]').type('12345-000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="title"]').should('contain.text', 'Checkout: Overview')

    //Finalizar pedido
    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!')

  })
  
})