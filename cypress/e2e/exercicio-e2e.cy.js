/// <reference types="cypress" />
import { fakerDE as faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var quantidade = 10
        let emailFaker = faker.internet.email()


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addP('Apollo Running Short', '36', 'Black', 4)
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addP('Aero Daily Fitness Tee', 'XL', 'Brown', 2)
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addP('Aether Gym Pant', '34', 'Green', 3)
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.addP('Ajax Full-Zip Sweatshirt', 'XS', 'Red', 1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });


})
