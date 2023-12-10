/// <reference types="cypress" />
import { fakerDE as faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let emailFaker = faker.internet.email()
        var quantidade = 4

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('[class="product-block grid"]')
            .contains('Bruno Compete Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contains', 'adicionados no seu carrinho.')
    });


})
