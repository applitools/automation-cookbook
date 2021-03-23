describe("Select", () => {

  beforeEach(() => {
    cy.visit('/ingredients/select');
  })

  it('should select an option from the select dropdown', () => {
    cy.get('#spices-select-single').select('ginger').should('have.value', 'ginger')
  });

  it('should select multiple options from the multi select dropdown', () => {
    cy.get('#spices-select-multi').select(['ginger', 'paprika']).invoke('val').should('deep.equal', ['ginger', 'paprika'])
  });

});