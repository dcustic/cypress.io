/// <reference types="Cypress" />

describe('Cypress and Vue-router', function() {

	it('Alle Links funktionieren', function() {
		// cy.visit('http://localhost:8080/')
		cy.visit('/')

		cy.contains('Open Hello World')

		cy.contains('Open about us').click()
		cy.url().should('include', '/aboutus')

		cy.contains('Register').click()
		cy.url().should('include', '/register')
		cy.get('input[type=text]').eq(0)
			.type('Mein Name ist Hase')
			.should('have.value', 'Mein Name ist Hase')
	});

})