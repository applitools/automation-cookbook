describe("iFrame", () => {

  beforeEach(() => {
    cy.visit('/ingredients/iframe');
  });

  it('should find a table in the iframe', () => {
    cy.get('#the-kitchen-table').its('0.contentDocument').its('body').then(cy.wrap).find('#fruits-vegetables').should('be.visible');
  });

});