describe('Load Init Page', function(){
	it('.visit() - Visit initial page', function(){
		cy.visit('http://localhost:8080')
		cy.contains('Installed CLI Plugins')
	})
});