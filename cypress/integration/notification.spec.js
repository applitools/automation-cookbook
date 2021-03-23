describe("Notification", () => {
  
  it('should disable notifications', () => {
    cy.visit('/ingredients/notification', {
      onBeforeLoad (win) {
        cy.stub(win.Notification, 'requestPermission').resolves('denied')
      },
    });
    cy.get('h1').contains('Notification');
  });

  it('should trigger and approve a notification', () => {
    cy.visit('/ingredients/notification', {
      onBeforeLoad (win) {
        cy.stub(win.Notification, 'requestPermission').resolves('granted').as('permission')
        cy.stub(win, 'Notification').as('Notification')
      },
    });

    cy.get('#notification-button').click();

    cy.get('@permission').should('have.been.calledOnce').and('have.been.calledBefore', cy.get('@Notification'))
    cy.get('@Notification').should('have.been.calledWithNew').and('have.been.calledWithExactly', 'There\'s nothing like a good salad!')
  });

  it('should trigger and block a notification', () => {
    cy.visit('/ingredients/notification', {
      onBeforeLoad (win) {
        cy.stub(win.Notification, 'requestPermission').resolves('denied')
        cy.stub(win, 'Notification').as('Notification')
      },
    });

    cy.get('#notification-button').click();

    cy.get('@Notification').should('not.have.been.called')
  });
});