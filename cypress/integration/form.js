describe('Test the form', function () {

	it('should put the typed data to ...', function () {
		cy.visit('/')
		cy.get('#registerLink').children('a').click()
		cy.get('#firstName').type("Firstname")
		cy.get('#lastName').type("Lastname")
		cy.get('#street').type("Street")
		cy.get('#city').type("Metzingen")
		cy.get("#addressForm").submit()
	});
})

