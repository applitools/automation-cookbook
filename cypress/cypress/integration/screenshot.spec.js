describe("Screenshot", () => {

  beforeEach(() => cy.visit('/ingredients/file-picker'))
  
  it('should take a screenshot', () => {
    cy.screenshot();
  });
  
  it('should take a screenshot after trying to upload a picture', () => {
    cy.get('#photo-upload').attachFile('images/french-toast.jpg');
    cy.get('form figure').screenshot();
  });
  
  it('should take a screenshot after a failed assertion', () => {
    cy.on('error', (error, runnable) => {
      cy.get('form').screenshot();
      throw error // throw error to have test still fail
    })
    cy.get('form figure').screenshot();
  });
});