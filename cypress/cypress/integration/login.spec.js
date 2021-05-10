describe("Login", () => {

  it('should log into the application', () => {
    cy.visit('https://demo.applitools.com/');
    cy.get('#username').type('colbyfayock');
    cy.get('#password').type('Password1234');
    cy.get('#log-in').click();
    cy.get('.element-header').contains('Financial Overview');
  });

});
