describe("Alert", () => {

  beforeEach(() => {
    cy.visit('/ingredients/cookie');
  });
  
  it('should get the value of a cookie', () => {
    cy.getCookie('protein').should('have.property', 'value', 'chicken')
    cy.getCookie('vegetable').should('have.property', 'value', 'broccoli')
  });
  
  it('should update the value of a cookie', () => {
    cy.clearCookie('protein').then(() => {
      cy.setCookie('protein', 'pork').then(() => {
        cy.getCookie('protein').should('have.property', 'value', 'pork');
      });
    });
  });
  
  it('should delete the value of a cookie', () => {
    cy.clearCookie('protein').then(() => {
      cy.getCookie('protein').should('be.null');
    });
  });
  
  it('should add a new cookie', () => {
    cy.setCookie('fruit', 'papaya').then(() => {
      cy.getCookie('fruit').should('have.property', 'value', 'papaya');
    });
    
  });

});