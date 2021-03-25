describe("Alert", () => {

  beforeEach(() => {
    cy.visit('/ingredients/alert');
  });
  
  it('should trigger an alert with a message', () => {
    cy.get('#alert-button').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Airfryers can make anything!');
    });
  });
  
  it('should trigger a confirmation with a message', () => {
    cy.get('#confirm-button').click();
    
    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Proceed with adding garlic?');
    });

    cy.get('#confirm-answer').contains('Answer: Yes');
  });
  
  it('should trigger a confirmation with a message and cancel', () => {
    cy.get('#confirm-button').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Proceed with adding garlic?');
      return false;
    });

    cy.get('#confirm-answer').contains('Answer: No');
  });

  it('should trigger a prompt with a message', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('Pizza!');
      cy.get('#prompt-button').click();
      cy.get('#prompt-answer').contains('Answer: Pizza!');
    });
  });

  it('should trigger a prompt with a message and cancel', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').callsFake(() => null);
      cy.get('#prompt-button').click();
      cy.get('#prompt-answer').contains('Answer: Cancelled');
    });
  });

});