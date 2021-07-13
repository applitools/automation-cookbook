describe("Drag and Drop", () => {

  beforeEach(() => {
    cy.visit('/ingredients/drag-and-drop');
  });
  
  it('should drag fried chicken to the order', () => {
    const dataTransfer = new DataTransfer();

    cy.get('#menu-fried-chicken').trigger('dragstart', {
      dataTransfer
    });

    cy.get('#plate').trigger('drop', {
      dataTransfer
    });
  });
  
  it('should drag ice cream to the order', () => {
    cy.get('#menu-ice-cream').drag('#plate-items');
  });

});