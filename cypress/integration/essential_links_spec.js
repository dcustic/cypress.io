describe('Essential links sind da', function () {
	it('Check essential links', function () {
		cy.visit("/");

		cy.get('ul#essentials').should(function ($essentials) {
			expect($essentials).to.have.length(1);
			expect($essentials.children()).to.have.length(5);
		});

		cy.contains('Core Docs').should('have.attr', 'href', 'https://vuejs.org');
		cy.contains('Forum').should('have.attr', 'href', 'https://forum.vuejs.org');
		cy.contains('Community Chat').should('have.attr', 'href', 'https://chat.vuejs.org');
		cy.contains('Twitter').should('have.attr', 'href', 'https://twitter.com/vuejs');
		cy.contains('News').should('have.attr', 'href', 'https://news.vuejs.org');

	});
});